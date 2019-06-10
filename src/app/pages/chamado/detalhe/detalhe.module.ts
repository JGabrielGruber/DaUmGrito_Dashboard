import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheComponent } from './detalhe.component';

const routes: Routes = [
	{
		path: '',
		component: DetalheComponent
	}
];

@NgModule({
	declarations: [DetalheComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class DetalheModule { }
