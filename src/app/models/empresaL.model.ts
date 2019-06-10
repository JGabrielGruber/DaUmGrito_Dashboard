export class EmpresaLight {
	_id: string;
	cnpj: string;
	nome: string;
	contato: {
		email_um: string
	} = {
		email_um: null
	};
}