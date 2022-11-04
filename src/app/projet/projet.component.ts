import { Component, OnInit } from '@angular/core';
import { RequeteService } from '../services/requete.service';
import { ContenuProjet } from '../model/contenu-projet.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss'],
})
export class ProjetComponent implements OnInit {
  constructor(private requeteservice: RequeteService) {}

  allProjet!: ContenuProjet[];
  loading: boolean = false;

  ngOnInit(): void {
    this.requeteservice.getAllDataProjet().subscribe((data) => {
      this.allProjet = data;
      this.loading = true;
    });
  }
}
