import { Store } from '@ngrx/store';
import { ChamadoReducer } from './../../../models/chamadoR.model';
import { LoginService } from './../../../services/login.service';
import { Chamado } from './../../../models/chamado.model';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChamadoService } from '../../../services/chamado.service';
import * as ChamadoActions from '../../../actions/chamado.action';

interface AppState {
	chamados: ChamadoReducer
}

@Component({
	selector: 'app-detalhe',
	templateUrl: './detalhe.component.html',
	styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent {
	chamado: Chamado = new Chamado();

	constructor(
		public router: Router,
		public route: ActivatedRoute,
		private chamadoService: ChamadoService,
		private loginService: LoginService,
		private store: Store<AppState>
	) {
		this.route.queryParams.subscribe((params) => {
			if (params) {
				this.obterChamado(params.id);
			}
		});
	}

	async obterChamado(id: string): Promise<void> {
		let token = await this.loginService.getToken();
		if (token && token != "") {
			let response = await this.chamadoService.getById(id, token);
			if (response.success) {
				this.chamado = response.data;
			}
		}
	}

	async atender() {
		let token = await this.loginService.getToken();
		let response = await this.chamadoService.postAtendente(this.chamado._id, token);
		if (response.success) {
			this.obterChamado(this.chamado._id);
			ChamadoActions.fetchChamados(this.chamadoService, this.loginService, this.store);
		}
	}

}
