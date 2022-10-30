import { Component, OnInit } from '@angular/core';
import {ElementAccueilComponent} from '../element-accueil/element-accueil.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent  implements OnInit {
  couleurBackground: string;
  presentations: ElementAccueilComponent[];
  
	ngOnInit() {
		this.couleurBackground = 'background-blue';

  }

}

 

