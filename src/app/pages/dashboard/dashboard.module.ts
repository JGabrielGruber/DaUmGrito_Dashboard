import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboarRoutingdModule } from './dashboard-routing.module';

@NgModule({
	declarations: [DashboardComponent],
	imports: [
		CommonModule,
		DashboarRoutingdModule,
		FormsModule,
		ChartsModule,
		BsDropdownModule,
		ButtonsModule.forRoot()
	]
})
export class DashboardModule { }
