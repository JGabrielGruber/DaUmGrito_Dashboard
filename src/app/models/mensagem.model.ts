export class Mensagem {
	_id:		string;
	autor:		string;
	remetente:	string;
	tipo:		string;
	conteudo:	string;
	pendente?:	boolean=false;
	timestamp:	string;
}