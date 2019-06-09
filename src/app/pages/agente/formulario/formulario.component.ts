import { Component, OnInit } from '@angular/core';
//import * as Jimp from 'jimp';


@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
	foto;

	constructor() {
	}

	ngOnInit() {
	}

	async teste(): Promise<void> {
		console.log("aQQQQQQQQQ");
		
		console.log(this.foto);
		/*Jimp.read(this.foto)
		.then(async image => {
			this.foto = await image.getBase64Async("data:image/jpeg;base64");
		})
		.catch(err => {
		  // Handle an exception.
		});/
	}

}
