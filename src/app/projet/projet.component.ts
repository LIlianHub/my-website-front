import { Component, OnInit } from '@angular/core';
import { RequeteService } from '../services/requete.service';
import { ContenuProjet } from '../model/contenu-projet.model';
import { GestionCookieService } from '../services/gestionCookie.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss'],
})
export class ProjetComponent implements OnInit {
  constructor(
    private requeteservice: RequeteService,
    private gestioncookieservice: GestionCookieService
  ) {}

  allProjet!: ContenuProjet[];
  loading: boolean = false;
  couleurBackground!: string;

  ngOnInit(): void {
    this.requeteservice.getAllDataProjet().subscribe((data) => {
      this.allProjet = data;
      this.loading = true;
    });

    this.changeThemeProjet(this.gestioncookieservice.getTheme()); //setgoodbackground

    this.gestioncookieservice.onDarkTheme$.subscribe((theme) => {
      this.changeThemeProjet(theme);
    });
  }

  changeThemeProjet(choice: boolean) {
    if (choice) {
      this.couleurBackground = 'background-dark';
    } else {
      this.couleurBackground = 'background-blue';
    }
  }
}
