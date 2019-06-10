import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadoComponent } from './chamado.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ChamadoComponent,
		data: {
			title: 'Chamados'
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ChamadoRoutingdModule { }
