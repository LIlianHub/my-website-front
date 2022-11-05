import { Injectable } from '@angular/core';
import { ContenuAccueil } from '../model/contenu-accueil.model';
import { ContenuProjet } from '../model/contenu-projet.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RequeteService {
  constructor(private http: HttpClient) {}

  getAllDataAccueil(): Observable<ContenuAccueil[]> {
    return this.http.get<ContenuAccueil[]>(
      'https://ballejos-lilian.fr:3000/recup-data-accueil'
    );
  }

  getDataProjectbyId(id: number): Observable<ContenuProjet> {
    return this.http.get<ContenuProjet>(
      `https://ballejos-lilian.fr:3000/recup-data-projet-id/${id}`
    );
  }

  getAllDataProjet(): Observable<ContenuProjet[]> {
    return this.http.get<ContenuProjet[]>(
      'https://ballejos-lilian.fr:3000/recup-data-projet'
    );
  }

  sendMail(contenu: any) {
    return this.http.post<any>('https://ballejos-lilian.fr:3000/send-mail', contenu).pipe(
      map((reponse: any) => {
        return reponse;
      })
    );
  }
}
