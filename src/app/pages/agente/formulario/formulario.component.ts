import { AgenteService } from './../../../services/agente.service';
import { LoginService } from './../../../services/login.service';
import { Agente } from './../../../models/agente.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as Jimp from 'jimp';


@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
	agente: Agente = new Agente();
	isFetching: boolean = false;
	foto;
	URL;
	_changeDetection;

	constructor(
		public router: Router,
		private loginSerivce: LoginService,
		private agenteService: AgenteService
	) {
	}

	ngOnInit() {
	}

	useImage(event) {
		if (event.target.files && event.target.files[0]) {
			const reader = new FileReader();

			reader.readAsDataURL(event.target.files[0]); // Read file as data url
			reader.onloadend = (e) => { // function call once readAsDataUrl is completed
				this.URL = e.target['result']; // Set image in element
				this._changeDetection.markForCheck(); // Is called because ChangeDetection is set to onPush
			};
		}
	}

	async register() {
		/*Jimp.read(this.foto)
		.then(async image => {
			this.foto = await image.getBase64Async("data:image/jpeg;base64");
		})
		.catch(err => {
		  // Handle an exception.
		});*/
		let token = await this.loginSerivce.getToken();
		if (!this.isFetching) {
			this.isFetching = true;
			this.agente.foto = this.URL;
			let result = await this.agenteService.post(this.agente, token);
			this.isFetching = false;
			if (result.success) {
				alert("Sucesso!")
			}
		}
	}

}
