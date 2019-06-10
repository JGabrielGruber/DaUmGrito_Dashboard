import { UsuarioService } from '../services/usuario.service';
import { Action } from '@ngrx/store';
import { LoginService } from '../services/login.service';
import { UsuarioReducer } from '../models/usuarioR.model';

export const REQUEST_USUARIO		= '[Usuario] Request usuario';
export const RECEIVE_USUARIO		= '[Usuario] Receive usuario';
export const RECEIVE_FETCH			= '[Usuario] Receive Fetch usuario';
export const SET_USUARIO			= '[Usuario] Set usuario';
export const UNSET_USUARIO			= '[Usuario] Unset usuario';

export class RequestUsuario implements Action {
	readonly type = REQUEST_USUARIO;
}

export class ReceiveUsuario implements Action {
	readonly type = RECEIVE_USUARIO;
	constructor(public payload: UsuarioReducer) {}
}

export class ReceiveFetch implements Action {
	readonly type = RECEIVE_FETCH;
}

export class SetUsuario implements Action {
	readonly type = SET_USUARIO;
	constructor(public payload: any) {}
}

export class UnsetUsuario implements Action {
	readonly type = UNSET_USUARIO;
}

export async function fetchUsuario(loginService: LoginService, usuarioService: UsuarioService, store: any) {
	let isFetching: boolean;
	await store.select('usuario').subscribe((data)=> {
		isFetching = data.isFetching;
	});
	if (!isFetching) {
		let localUser	= await usuarioService.getUsuario();
		if (localUser) {
			store.dispatch(new SetUsuario(localUser))
		}
		store.dispatch(new RequestUsuario());
		let token	= await loginService.getToken();
		if (token) {
			let response	= await usuarioService.getData(token);
			if (response.success) {
				usuarioService.setUsuario(response.data);
				store.dispatch(new ReceiveUsuario({
					isFetching		: false,
					didInvalidate	: false,
					data			: response.data
				}));
				return response.data;
			}
		}
		store.dispatch(new ReceiveFetch);
		return;
	}
}

export type All
	= RequestUsuario
	| ReceiveUsuario
	| ReceiveFetch
	| SetUsuario
	| UnsetUsuario