import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GestionCookieService {

  onDarkTheme$: Subject<boolean> = new Subject<boolean>();

  constructor(private cookieService: CookieService) {}

  getTheme(): boolean {
    return this.cookieService.get('onDarkTheme-User') == 'true'; //cast string to boolean
  }

  changeTheme(theme: boolean): void {
    this.cookieService.set('onDarkTheme-User', theme.toString(), { path: "/"});
    this.onDarkTheme$.next(theme);
  }

}
