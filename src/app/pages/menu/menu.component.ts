import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { navItemsEmpresa } from './navItemsEmpresa';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
	public navItems = navItemsEmpresa;
	public sidebarMinimized = true;
	private changes: MutationObserver;
	public element: HTMLElement;
	constructor(@Inject(DOCUMENT) _document?: any) {

		this.changes = new MutationObserver((mutations) => {
			this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
		});
		this.element = _document.body;
		this.changes.observe(<Element>this.element, {
			attributes: true,
			attributeFilter: ['class']
		});
	}

	ngOnDestroy(): void {
		this.changes.disconnect();
	}
}
