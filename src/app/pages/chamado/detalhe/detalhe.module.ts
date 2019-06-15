import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheComponent } from './detalhe.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
	{
		path: '',
		component: DetalheComponent
	}
];

@NgModule({
	declarations: [DetalheComponent, ChatComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class DetalheModule { }
