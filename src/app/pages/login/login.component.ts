import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	credentials = { client_id: null, client_secret: null };

	constructor(
		private router: Router
	) { }

	async logIn(): Promise<void> {
		this.router.navigateByUrl('/');
	}

}
