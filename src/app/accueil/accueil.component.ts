import { Component, OnInit } from '@angular/core';
import {ElementAccueilComponent} from '../element-accueil/element-accueil.component';
import { DataAccueilService } from '../services/data_accueil.service';
import { ContenuAccueil } from '../model/contenu-accueil.model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent  implements OnInit {
  couleurBackground: string;
  presentations: ContenuAccueil[];
  

  constructor(private dataaccueilservice: DataAccueilService) {}
  
	ngOnInit() {
		this.couleurBackground = 'background-blue';

    this.dataaccueilservice.getAllDataAccueil().subscribe(
      (contenu: ContenuAccueil[]) => {
        this.presentations = contenu;
        //this.loading = true;
      }
    );
    

  }

}

 

