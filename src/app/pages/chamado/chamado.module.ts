import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadoComponent } from './chamado.component';
import { ChamadoRoutingdModule } from './chamado-routing.module';

@NgModule({
	declarations: [ChamadoComponent],
	imports: [
		CommonModule,
		ChamadoRoutingdModule
	]
})
export class ChamadoModule { }
