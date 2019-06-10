export class Login {
	client_id		: string;
	client_secret	: string;
	grant_type		: string = "client_credentials";
	access_token	: string;
	token_type		: string;
}
