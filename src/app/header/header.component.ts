import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GestionCookieService } from '../services/gestionCookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];

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
        label: 'Mes projets',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/projet',
      },
      {
        label: 'Me contacter',
        icon: 'pi pi-fw pi-inbox',
        routerLink: '/contact',
      },
      {
        label: 'Mes CVs',
        icon: 'pi pi-fw pi-print',
        items: [
          { label: 'CV Français', url: 'http://localhost:3000/cv/fr.pdf' },
          { label: 'CV Anglais', url: 'http://localhost:3000/cv/en.pdf' },
        ],
      },
      {
        label: 'GitHub',
        icon: 'pi pi-fw pi-github',
        url: "https://github.com/LIlianHub"
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
