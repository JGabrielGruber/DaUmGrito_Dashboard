import { NgModule } from '@angular/core';
import { AgenteComponent } from './agente.component';
import { FormularioComponent } from './formulario/formulario.component'

import { Routes, RouterModule } from '@angular/router';
import { AgenteRoutingComponent } from './agente-routing.component';

const routes: Routes = [
	{
		path: '',
		component: AgenteRoutingComponent,
		data: {
			title: 'Agentes'
		},
		children: [
			{
				path: '',
				component: AgenteComponent,
				data: {
					title: ''
				},
			},
			{
				path: 'formulario',
				component: FormularioComponent,
				data: {
					title: 'Formulário'
				}
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AgenteRoutingModule { }
