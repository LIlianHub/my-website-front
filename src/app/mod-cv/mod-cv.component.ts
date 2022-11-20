import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionCookieService } from '../services/gestionCookie.service';
import { RequeteService } from '../services/requete.service';

@Component({
  selector: 'app-mod-cv',
  templateUrl: './mod-cv.component.html',
  styleUrls: ['./mod-cv.component.scss'],
})
export class ModCvComponent implements OnInit {
  pdfSrc!: string;
  loading: boolean = false;
  couleurBackground: string;

  constructor(
    private route: ActivatedRoute,
    private gestioncookieservice: GestionCookieService,
    private requeteservive: RequeteService
  ) {}

  ngOnInit(): void {
    const langue = this.route.snapshot.params['langue'];
    this.pdfSrc = this.requeteservive.getCV(langue);
    
    this.changeThemeProjet(this.gestioncookieservice.getTheme()); //setgoodbackground

    this.gestioncookieservice.onDarkTheme$.subscribe((theme) => {
      this.changeThemeProjet(theme);
    });

    this.loading = true;
  }

  changeThemeProjet(choice: boolean) {
    if (choice) {
      this.couleurBackground = 'background-dark';
    } else {
      this.couleurBackground = 'background-blue';
    }
  }
}
