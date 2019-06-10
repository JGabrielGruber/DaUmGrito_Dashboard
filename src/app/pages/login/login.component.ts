import { UsuarioService } from './../../services/usuario.service';
import { Http } from './../../models/http.model';
import { AgenteService } from './../../services/agente.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoginReducer } from '../../models/loginR.model';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login.model';
import * as LoginActions from '../../actions/login.action';
import * as UsuarioActions from '../../actions/usuario.action';

interface AppState {
	login: LoginReducer
}

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	credentials = { client_id: null, client_secret: null };
	type: any;
	login$: Observable<LoginReducer>;

	constructor(
		public router: Router,
		private loginService: LoginService,
		private agenteService: AgenteService,
		private usuarioService: UsuarioService,
		private store: Store<AppState>
	) {
		this.login$ = this.store.select('login');
		this.check();
	}

	async check() {
		if ((await this.loginService.getToken())) {
			this.router.navigateByUrl('/');
		}
	}

	async logIn(): Promise<void> {
		let result: Http;
		if ((this.credentials.client_id.toString()).length <= 11) {
			this.type	= 'agente';
			result	= await this.agenteService.getIdByCpf(this.credentials.client_id);
			if (result.success) {
				this.credentials.client_id	= result.data._id;
			}
		} else {
			this.type	= 'empresa';
		}
		let login:Login = {
			client_id: this.credentials.client_id,
			client_secret: this.credentials.client_secret,
			grant_type: "client_credentials",
			access_token: null,
			token_type: null
		}
		result = await LoginActions.logIn(login, this.loginService, this.store);
		if (result && result.success) {
			this.login$.subscribe((data) => {
				this.loginService.setLogin(data.data);
			});
			await UsuarioActions.fetchUsuario(this.loginService, this.usuarioService, this.store, this.type);
			this.router.navigateByUrl('/', { replaceUrl: true });
		}
	}

	signUp() {
		this.router.navigateByUrl('/signup');
	}

}
