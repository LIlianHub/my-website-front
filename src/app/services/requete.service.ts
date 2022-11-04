import { Injectable } from '@angular/core';
import { ContenuAccueil } from '../model/contenu-accueil.model';
import { ContenuProjet } from '../model/contenu-projet.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequeteService {
  constructor(private http: HttpClient) {}

  getAllDataAccueil(): Observable<ContenuAccueil[]> {
    return this.http.get<ContenuAccueil[]>(
      'http://localhost:3000/recup-data-accueil'
    );
  }

  getDataProjectbyId(id: number): Observable<ContenuProjet> {
    return this.http.get<ContenuProjet>(
      `http://localhost:3000/recup-data-projet-id/${id}`
    );
  }

  getAllDataProjet(): Observable<ContenuProjet[]> {
    return this.http.get<ContenuProjet[]>(
      'http://localhost:3000/recup-data-projet'
    );
  }
}
