import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: 'login',
		component: LoginComponent,
		data: {
			title: 'Página de Acesso'
		}
	},
	{
		path: 'signup',
		component: RegisterComponent,
		data: {
			title: 'Página de Cadastro'
		}
	},
	{
		path: '',
		component: MenuComponent,
		data: {
			title: 'Home'
		},
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'agentes',
				loadChildren: () => import('./pages/agente/agente.module').then(m => m.AgenteModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
