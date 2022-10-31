import { Injectable } from '@angular/core';
import { ContenuAccueil } from '../model/contenu-accueil.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RequeteService {
  
  constructor(private http: HttpClient) { }

  getAllDataAccueil(): Observable<ContenuAccueil[]> {
    return this.http.get<ContenuAccueil[]>('http://localhost:3000/recup-data-accueil');
  }
  
}