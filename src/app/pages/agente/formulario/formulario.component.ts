import { Component, OnInit } from '@angular/core';
//import * as Jimp from 'jimp';


@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
	foto;
	URL;
	_changeDetection;

	constructor() {
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

	async teste(): Promise<void> {
		console.log("aQQQQQQQQQ");

		console.log(this.foto);
		/*Jimp.read(this.foto)
		.then(async image => {
			this.foto = await image.getBase64Async("data:image/jpeg;base64");
		})
		.catch(err => {
		  // Handle an exception.
		});*/
	}

}
