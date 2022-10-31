import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ContenuAccueil } from '../model/contenu-accueil.model';

@Component({
  selector: 'app-element-accueil',
  templateUrl: './element-accueil.component.html',
  styleUrls: ['./element-accueil.component.scss'],
  encapsulation: ViewEncapsulation.None,
})


export class ElementAccueilComponent {
  @Input() monContenu!: ContenuAccueil;

  constructor() { }

  ngOnInit(): void {
  }

}
