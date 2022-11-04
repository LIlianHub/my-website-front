import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GestionCookieService } from '../services/gestionCookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  onDarkMode: boolean;

  constructor(private gestioncookieservice: GestionCookieService) {}

  stateOptions: any[];

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-fw pi-home',
        routerLink: '/accueil',
      },
      {
        label: 'Projet',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Tous les Projets', routerLink: '/projet' },
          { label: 'Projet 1' },
          { label: 'Projet 2' },
        ],
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

    this.stateOptions = [
      { label: 'Sombre', value: 'dark_theme' },
      { label: 'Classique', value: 'blue_theme' },
    ];

    this.onDarkMode = this.gestioncookieservice.getTheme();
  }

  cliqueTheme(e: any) {
    this.gestioncookieservice.changeTheme(e.checked);
  }
}
