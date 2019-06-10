import { Http } from './../models/http.model';
import { HttpService } from './http.service';
import { Configs } from './../configs';
import { Agente } from './../models/agente.model';
import { Injectable } from '@angular/core';
import { Service } from '../base/Service';

@Injectable({
  providedIn: 'root'
})
export class AgenteService extends Service<Agente>{

	url: string = `${Configs.url}agentes`;

	constructor(
		public http: HttpService) {
		super(`${Configs.url}agentes`, http);
	}

	async getIdByCpf(cpf: string): Promise<Http> {
		return this.http.get(`${ this.url }/cpf/${ cpf }`);
	}
}
