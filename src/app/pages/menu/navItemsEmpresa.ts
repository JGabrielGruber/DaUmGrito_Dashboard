import { NavData } from "../../NavData";

export const navItemsEmpresa: NavData[] = [
	{
		name: 'Dashboard',
		url: '/dashboard',
		icon: 'fa fa-dashboard'
	},
	{
		name: 'Agentes',
		icon: 'fa fa-users',
		children: [
			{
				name: 'Lista de Agentes',
				url: '/agentes',
				icon: 'fa fa-list'
			},
			{
				name: 'Formulário de Agente',
				url: '/agentes/formulario',
				icon: 'fa fa-pencil'
			}
		]
	},
	{
		name: 'Chamados',
		url: '/chamados',
		icon: 'fa fa-bullhorn'
	}
];