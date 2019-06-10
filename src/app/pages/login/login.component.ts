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
	login$: Observable<LoginReducer>;

	constructor(
		public router: Router,
		private loginService: LoginService,
		private agenteService: AgenteService,
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
			result	= await this.agenteService.getIdByCpf(this.credentials.client_id);
			console.log(result);
			
			if (result.success) {
				this.credentials.client_id	= result.data._id;
			}
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
			//await ClienteActions.fetchUsuario(this.loginService, this.usuarioService, this.store);
			this.router.navigateByUrl('/', { replaceUrl: true });
		}
	}

	signUp() {
		this.router.navigateByUrl('/signup');
	}

}
