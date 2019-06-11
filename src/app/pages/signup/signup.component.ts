import { EmpresaService } from './../../services/empresa.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/empresa.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	empresa: Empresa = new Empresa();
	isRequesting: boolean = false;
	URL;

	constructor(
		private router: Router,
		private empresaService: EmpresaService
	) { }

	ngOnInit() {
	}

	getImage(event) {
		if (event.target.files && event.target.files[0]) {
			const reader = new FileReader();

			reader.readAsDataURL(event.target.files[0]);
			reader.onloadend = (e) => {
				this.URL = e.target['result'];
				console.log(this.URL);
			};
		}
	}

	async signUp() {
		if (!this.isRequesting) {
			this.isRequesting = true;
			this.empresa.foto = this.URL;
			let result = await this.empresaService.post(this.empresa);
			this.isRequesting = false;
			if (result.success) {
				this.router.navigateByUrl('/login');
			}
		}
	}

	cancel() {
		this.router.navigateByUrl('/login');
	}

}
