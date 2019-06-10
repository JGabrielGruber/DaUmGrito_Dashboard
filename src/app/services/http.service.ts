import { Http } from '../models/http.model';
import { NetworkService } from './network.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(
		private http: HttpClient,
		private networkSrv: NetworkService 
	) { }

	public get(url: string, token = null): Promise<Http> {
		return new Promise((resolve) => {
			if (this.networkSrv.IsOnline) {
				let headers	= {};
				if (token) {
					headers['Authorization'] = token;
				}
				this.http.get(url, { headers })
					.subscribe(_res => {
						resolve({ success: true, data: _res, err: undefined });
					}, err => {
						resolve({ success: false, data: undefined, err: err });
					});
			}
			else {
				console.error("Offline");
				resolve({ success: true, data: [], err: undefined });
			}
		});
	}

	public post(url: string, model: any, token = null, message = 'Adicionado com sucesso!'): Promise<Http> {
		return new Promise((resolve) => {
			if (this.networkSrv.IsOnline) {
				let headers	= {};
				if (token) {
					headers['Authorization'] = token;
				}
				this.http.post(url, model, { headers })
					.subscribe(_res => {
						resolve({ success: true, data: _res, err: undefined });
					}, err => {
						console.log(err);
						resolve({ success: false, data: undefined, err: err });
					});
			}
			else {
				console.error("Offline");
				resolve({ success: false, data: [], err: undefined });
			}
		});
	}

	public put(url: string, model: any, token = null,): Promise<Http> {
		return new Promise((resolve) => {
			if (this.networkSrv.IsOnline) {
				let headers	= {};
				if (token) {
					headers['Authorization'] = token;
				}
				this.http.put(url, model, { headers })
					.subscribe(_res => {
						resolve({ success: true, data: _res, err: undefined });
					}, err => {
						console.log(err);
						resolve({ success: false, data: undefined, err: err });
					});
			}
			else {
				console.error("Offline");
				
				resolve({ success: true, data: [], err: undefined });
			}
		});
	}

	public delete(url: string, token: any = null): Promise<Http> {
		return new Promise((resolve) => {
			if (this.networkSrv.IsOnline) {
				let headers	= {};
				if (token) {
					headers['Authorization'] = token;
				}
				this.http.delete(url, { headers }).subscribe(_res => {
					resolve({ success: true, data: _res, err: undefined });
				}, err => {
					console.error(err);
					resolve({ success: true, data: undefined, err: err });
				});
			}
			else {
				console.error("Offline");
				resolve({ success: true, data: [], err: undefined });
			}
		})
	}
}
