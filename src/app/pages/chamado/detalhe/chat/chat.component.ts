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
import * as ResolucoesActions from '../../../../actions/resolucoes.action';

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
	@Input() public id:	string;
	chamado:		Chamado;
	resolucoes$:	Observable<ResolucoesReducer>;
	usuario$:		Observable<UsuarioReducer>;
	visible:		boolean	= false;
	conteudo:		string;

	constructor(
		private store: Store<AppState>,
		private loginService: LoginService,
		private chamadoService: ChamadoService,
		private resolucoesService: ResolucoesService,
		private usuarioService: UsuarioService
	) {
		this.resolucoes$	= this.store.select('resolucoes');
		this.usuario$		= this.store.select('usuario');
	}

	ngOnInit() {
		this.obterChamado(this.id);
		this.syncChat();
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

	async syncChat() {
		setTimeout(() => {
			ResolucoesActions.fetchResolucoes(this.resolucoesService, this.loginService, this.store, this.id);
			this.syncChat();
		}, 3000);
	}

	flip() {
		this.visible	= !this.visible;
		this.scroll();
	}

	async send() {
		ResolucoesActions.postMensagem(this.resolucoesService, this.loginService, this.store, this.id, this.conteudo);
		this.conteudo	= "";
		this.scroll();
	}

	async scroll() {
		setTimeout(()=>{
			let el	= document.getElementById('chatMensagens');
			if (el)
				el.scrollTop = el.scrollHeight;
		}, 10);
	}
}
