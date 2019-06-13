import { LoginService } from './../../services/login.service';
import { Store } from '@ngrx/store';
import { UsuarioReducer } from './../../models/usuarioR.model';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { navItemsEmpresa } from './navItemsEmpresa';
import { Observable } from 'rxjs';
import * as UsuarioActions from '../../actions/usuario.action';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { navItemsAgente } from './navItemsAgente';

interface AppState {
	usuario: UsuarioReducer
}

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
	usuario$: Observable<UsuarioReducer>;
	loggedOff: boolean	= false;

	public navItems;
	public sidebarMinimized = true;
	private changes: MutationObserver;
	public element: HTMLElement;

	constructor(
		public router: Router,
		private store: Store<AppState>,
		private loginService: LoginService,
		private usuarioService: UsuarioService,
		@Inject(DOCUMENT) _document?: any
	) {
		this.changes = new MutationObserver((mutations) => {
			this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
		});
		this.element = _document.body;
		this.changes.observe(<Element>this.element, {
			attributes: true,
			attributeFilter: ['class']
		});
		this.usuario$ = this.store.select('usuario');
		this.check();
	}

	async check() {
		if ((await this.loginService.getToken())) {
			await UsuarioActions.fetchUsuario(this.loginService, this.usuarioService, this.store);
			let usuarioSubscrition	= this.usuario$.subscribe((usuario) => {
				if (usuario.data) {
					if (usuario.data.cnpj) {
						this.navItems = navItemsEmpresa;
					} else {
						this.navItems = navItemsAgente;
					}
				}
				if (this.loggedOff) {
					usuarioSubscrition.unsubscribe();
				}
			});
		} else {
			this.router.navigateByUrl('/login');
		}
	}

	async logOff() {
		this.loginService.unsetLogin();
		this.store.dispatch(new UsuarioActions.UnsetUsuario());
		this.loggedOff = true;
		this.router.navigateByUrl('/login');
	}

	ngOnDestroy(): void {
		this.changes.disconnect();
	}
}
