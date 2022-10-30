import { Component, Input } from '@angular/core';
import { ContenuAccueil } from '../model/contenu-accueil.model';

@Component({
  selector: 'app-element-accueil',
  templateUrl: './element-accueil.component.html',
  styleUrls: ['./element-accueil.component.scss']
})


export class ElementAccueilComponent {
  @Input() monContenu!: ContenuAccueil;

  constructor() { }

  ngOnInit(): void {
  }

}
