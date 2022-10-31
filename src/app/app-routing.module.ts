import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { ProjetComponent } from './projet/projet.component';

const routes: Routes = [
  { path: '', component:  AccueilComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'projet', component: ProjetComponent},
  { path: '**', component: AccueilComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
