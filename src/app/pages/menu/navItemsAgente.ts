import { NavData } from "../../NavData";

export const navItemsAgente: NavData[] = [
	{
		name: 'Dashboard',
		url: '/dashboard',
		icon: 'fa fa-dashboard'
	},
	{
		name: 'Chamados',
		url: '/chamados',
		icon: 'fa fa-bullhorn',
		children: [
			{
				name: 'Todos os Chamados',
				url: '/chamados',
				icon: 'fa fa-list'
			},
			{
				name: 'Chamados da Empresa',
				url: '/chamados/empresa',
				icon: 'fa fa-id-card'
			},
			{
				name: 'Chamados do Agente',
				url: '/chamados/agente',
				icon: 'fa fa-id-badge'
			}
		]
	}
];