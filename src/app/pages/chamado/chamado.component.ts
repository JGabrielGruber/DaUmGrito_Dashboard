import { UsuarioReducer } from './../../models/usuarioR.model';
import { LoginService } from './../../services/login.service';
import { ChamadoService } from './../../services/chamado.service';
import { Component } from '@angular/core';
import { ChamadoReducer } from '../../models/chamadoR.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import * as ChamadoActions from '../../actions/chamado.action';
import { Store } from '@ngrx/store';
import { Chamado } from '../../models/chamado.model';

interface AppState {
	chamados:	ChamadoReducer,
	usuario:	UsuarioReducer
}

@Component({
	selector: 'app-chamado',
	templateUrl: './chamado.component.html',
	styleUrls: ['./chamado.component.scss']
})
export class ChamadoComponent {
	chamados$:	Observable<ChamadoReducer>;
	usuario$:	Observable<UsuarioReducer>;
	tipo:		string;
	id:			string;

	constructor(
		public router: Router,
		private route: ActivatedRoute,
		private store: Store<AppState>,
		private loginService: LoginService,
		private chamadoService: ChamadoService
	) {
		this.chamados$	= store.select('chamados');
		this.usuario$	= store.select('usuario');
		this.route.data.subscribe((data) => {
			this.tipo	= data.type;
			this.check();
		});
	}

	async check() {
		let usuarioSubscription = this.usuario$.subscribe( async (usuario) => {
			if (usuario.data) {
				switch (this.tipo) {
					case "empresa":
						this.id	= usuario.data.empresa.cnpj;
						await ChamadoActions.fetchChamados(
							this.chamadoService, this.loginService, this.store, this.id);
						break;
					case "agente":
						this.id	= usuario.data.cpf;
						await ChamadoActions.fetchChamados(
							this.chamadoService, this.loginService, this.store, null, this.id);
						break;
					default:
						await ChamadoActions.fetchChamados(
							this.chamadoService, this.loginService, this.store);
						break;
				}
				usuarioSubscription.unsubscribe();
				return;
			}
		});
	}

	detalhe(item: Chamado) {
		this.router.navigate(['/chamados/detalhe'], { queryParams: { id: item._id } });
	}

}
