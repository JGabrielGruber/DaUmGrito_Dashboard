import { ChamadoService } from './../../../../services/chamado.service';
import { Store } from '@ngrx/store';
import { Chamado } from './../../../../models/chamado.model';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ResolucoesReducer } from '../../../../models/resolucoesR.model';
import { UsuarioReducer } from '../../../../models/usuarioR.model';
import { LoginService } from '../../../../services/login.service';
import { ResolucoesService } from '../../../../services/resolucoes.service';
import { UsuarioService } from '../../../../services/usuario.service';

interface AppState {
	resolucoes:	ResolucoesReducer,
	usuario:	UsuarioReducer
}

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
	@Input() public id : string;
	chamado:		Chamado;
	resolucoes$:	Observable<ResolucoesReducer>;
	usuario$:		Observable<UsuarioReducer>;

	constructor(
		private store: Store<AppState>,
		private loginService: LoginService,
		private chamadoService: ChamadoService,
		private resolucoesService: ResolucoesService,
		private usuarioService: UsuarioService
	) {
		this.resolucoes$	= this.store.select('resolucoes');
		this.usuario$		= this.store.select('usuario');
		this.obterChamado(this.id);
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

	ngOnInit() {
	}

}
