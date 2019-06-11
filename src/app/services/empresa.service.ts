import { Empresa } from './../models/empresa.model';
import { Http } from './../models/http.model';
import { HttpService } from './http.service';
import { Configs } from './../configs';
import { Injectable } from '@angular/core';
import { Service } from '../base/Service';

@Injectable({
	providedIn: 'root'
})
export class EmpresaService extends Service<Empresa>{

	url: string = `${Configs.url}empresas`;

	constructor(
		public http: HttpService) {
		super(`${Configs.url}empresas`, http);
	}
}

