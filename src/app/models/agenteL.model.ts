export class AgenteLight {
	_id: string;
	contato: {
		telefone_um: string,
		email_um: string
	} = {
		telefone_um: null,
		email_um: null
	};
	cpf: number;
	nome: string;
	funcao: string;
	empresa: {
		_id: string,
		cnpj: string,
		nome: string,
		contato:	{
			email_um: string
		}
	} = {
		_id: null,
		cnpj: null,
		nome: null,
		contato:	{
			email_um: null
		}
	}
}
