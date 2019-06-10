import { UsuarioReducer } from './../models/usuarioR.model';
import * as UsuarioActions from '../actions/usuario.action';

export type Action = UsuarioActions.All;

const defaultState: UsuarioReducer = {
	isFetching		: false,
	didInvalidate	: false,
	data			: null,
	type			: null
}

const newState = (state, newData) => {
	return Object.assign({}, state, newData);
}

export function usuarioReducer(state: UsuarioReducer = defaultState, action: Action) {

	switch (action.type) {
		case UsuarioActions.RECEIVE_USUARIO:
			return newState(state, { isFetching: true, didInvalidate: false });
		case UsuarioActions.RECEIVE_USUARIO:
			return newState(state, action.payload);
		case UsuarioActions.RECEIVE_FETCH:
			return newState(state, { isFetching: false, didInvalidate: true });
		case UsuarioActions.SET_USUARIO:
			return newState(state, { data: action.payload });
		case UsuarioActions.UNSET_USUARIO:
			return newState(state, defaultState);

		default:
			return state;

	}
}