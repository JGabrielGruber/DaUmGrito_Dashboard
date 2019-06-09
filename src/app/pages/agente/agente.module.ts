import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenteComponent } from './agente.component';
import { AgenteRoutingModule } from './agente-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { AgenteRoutingComponent } from './agente-routing.component';

@NgModule({
	declarations: [AgenteComponent, AgenteRoutingComponent, FormularioComponent],
	imports: [
		CommonModule,
		AgenteRoutingModule,
		FormsModule
	]
})

export class AgenteModule { }
