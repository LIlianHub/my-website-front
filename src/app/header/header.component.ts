import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: MenuItem[];

  stateOptions: any[];

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Projet',
        icon: 'pi pi-fw pi-pencil',
        items: [{ label: 'Projet 1' }, { label: 'Projet 2' }],
      },
      {
        label: 'Me contacter',
        icon: 'pi pi-fw pi-inbox',
      },
      {
        label: 'Mes CVs',
        icon: 'pi pi-fw pi-print',
        items: [{ label: 'CV Français' }, { label: 'CV Anglais' }],
      },
    ];

    this.stateOptions = [{label: 'Sombre', value: 'sombre_theme'}, {label: 'Classique', value: 'classique_theme'}];
  }
}
