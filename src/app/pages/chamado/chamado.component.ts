import { LoginService } from './../../services/login.service';
import { ChamadoService } from './../../services/chamado.service';
import { Component } from '@angular/core';
import { ChamadoReducer } from '../../models/chamadoR.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as ChamadoActions from '../../actions/chamado.action';
import { Store } from '@ngrx/store';
import { Chamado } from '../../models/chamado.model';

interface AppState {
	chamados: ChamadoReducer
}

@Component({
	selector: 'app-chamado',
	templateUrl: './chamado.component.html',
	styleUrls: ['./chamado.component.scss']
})
export class ChamadoComponent {
	chamados$: Observable<ChamadoReducer>;

	constructor(
		public router: Router,
		private store: Store<AppState>,
		private loginService: LoginService,
		private chamadoService: ChamadoService
	) {
		this.chamados$	= store.select('chamados');
		this.check();
	}

	async check() {
		await ChamadoActions.fetchChamados(this.chamadoService, this.loginService, this.store);
	}

	detalhe(item: Chamado) {
		this.router.navigate(['/chamados/detalhe'], { queryParams: { id: item._id } });
	}

}
