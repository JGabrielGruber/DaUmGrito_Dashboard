import { ClienteLight } from './clienteL.model';

export class Chamado {
	_id			: string;
	cliente		: ClienteLight;
	responsavel	: null;
	titulo		: string;
	descricao	: string;
	localizacao	: {
		latitude	: number;
		longitude	: number;
	};
	foto		: string;
	resolucoes	: [];
	status		: string;
	timestamp	: string;
	timeupdate	: string;
}