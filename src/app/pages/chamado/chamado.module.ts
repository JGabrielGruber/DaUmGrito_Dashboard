import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadoComponent } from './chamado.component';

const routes: Routes = [
	{
		path: '',
		component: ChamadoComponent,
		pathMatch: 'full',
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
		loadChildren: () => import('./detalhe/detalhe.module').then(m => m.DetalheModule),
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
