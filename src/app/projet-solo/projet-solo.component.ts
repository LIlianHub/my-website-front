import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequeteService } from '../services/requete.service';
import { ContenuProjet } from '../model/contenu-projet.model';

@Component({
  selector: 'app-projet-solo',
  templateUrl: './projet-solo.component.html',
  styleUrls: ['./projet-solo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjetSoloComponent implements OnInit {
  leProjet!: ContenuProjet;
  loading: boolean = false;

  constructor(
    private requeteservive: RequeteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const projetID = +this.route.snapshot.params['id'];
    this.requeteservive.getDataProjectbyId(projetID).subscribe((data) => {
      this.leProjet = data;
      this.loading = true;
    });
  }
}
