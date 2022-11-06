import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequeteService } from '../services/requete.service';
import { ContenuProjet } from '../model/contenu-projet.model';
import { GestionCookieService } from '../services/gestionCookie.service';

@Component({
  selector: 'app-projet-solo',
  templateUrl: './projet-solo.component.html',
  styleUrls: ['./projet-solo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjetSoloComponent implements OnInit {
  leProjet!: ContenuProjet;
  loading: boolean = false;
  couleurBackground!: string;

  constructor(
    private requeteservive: RequeteService,
    private route: ActivatedRoute,
    private gestioncookieservice: GestionCookieService
  ) {}

  ngOnInit(): void {
    const projetID = this.route.snapshot.params['id'];
    this.requeteservive.getDataProjectbyId(projetID).subscribe((data) => {
      this.leProjet = data;
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
