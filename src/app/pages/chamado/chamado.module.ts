import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadoComponent } from './chamado.component';

const routes: Routes = [
	{
		path: '',
		component: ChamadoComponent,
		data: {
			title: 'Chamados',
			type: 'all'
		}
	},
	{
		path: 'empresa',
		component: ChamadoComponent,
		data: {
			title: 'Chamados da Empresa',
			type: 'empresa'
		}
	},
	{
		path: 'agente',
		component: ChamadoComponent,
		data: {
			title: 'Chamados do Agente',
			type: 'agente'
		}
	},
	{
		path: 'detalhe',
		loadChildren: './detalhe/detalhe.module#DetalheModule',
		data: {
			title: 'Detalhes'
		},
	}
];

@NgModule({
	declarations: [ChamadoComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class ChamadoModule { }
