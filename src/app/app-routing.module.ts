import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { ProjetSoloComponent } from './projet-solo/projet-solo.component';
import { ProjetComponent } from './projet/projet.component';

const routes: Routes = [
  { path: '', component:  AccueilComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'projet', component: ProjetComponent},
  { path: 'projet/:id', component: ProjetSoloComponent },
  { path: '**', component: AccueilComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
