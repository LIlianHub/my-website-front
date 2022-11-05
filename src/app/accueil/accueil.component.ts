import { Component, OnInit } from '@angular/core';
import { RequeteService } from '../services/requete.service';
import { ContenuAccueil } from '../model/contenu-accueil.model';
import { GestionCookieService } from '../services/gestionCookie.service';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  couleurBackground: string;
  presentations: ContenuAccueil[];
  loading: boolean;

  constructor(
    private requeteService: RequeteService,
    private gestioncookieservice: GestionCookieService
  ) {
    Carousel.prototype.onTouchMove = () => { };
  }

  ngOnInit() {
    this.requeteService
      .getAllDataAccueil()
      .subscribe((contenu: ContenuAccueil[]) => {
        this.presentations = contenu;
        this.loading = true;
      });

    this.changeThemeAccueil(this.gestioncookieservice.getTheme()); //setgoodbackground

    this.gestioncookieservice.onDarkTheme$.subscribe((theme) => {
      this.changeThemeAccueil(theme);
    });
  }

  changeThemeAccueil(choice: boolean) {
    if (choice) {
      this.couleurBackground = 'background-dark';
    } else {
      this.couleurBackground = 'background-blue';
    }
  }
}
