import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadoComponent } from './chamado.component';

const routes: Routes = [
	{
		path: '',
		component: ChamadoComponent,
		data: {
			title: 'Chamados'
		},
		
	},
	{
		path: 'detalhe',
		loadChildren: './detalhe/detalhe.module#DetalheModule'
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
