import { Injectable } from '@angular/core';

declare var navigator: any;

@Injectable({
	providedIn: 'root'
})
export class NetworkService {

	constructor() {}

	get IsOnline(): boolean {
		return navigator.onLine;
	}
}
