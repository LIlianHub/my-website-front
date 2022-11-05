import { Component, OnInit } from '@angular/core';
import { GestionCookieService } from '../services/gestionCookie.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private gestioncookieservice: GestionCookieService) {}
  couleurBackground: string;

  ngOnInit() {
    this.changeThemeContact(this.gestioncookieservice.getTheme()); //setgoodbackground

    this.gestioncookieservice.onDarkTheme$.subscribe((theme) => {
      this.changeThemeContact(theme);
    });
  }

  changeThemeContact(choice: boolean) {
    if (choice) {
      this.couleurBackground = 'background-dark';
    } else {
      this.couleurBackground = 'background-blue';
    }
  }
}
