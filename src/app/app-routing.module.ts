import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { ProjetSoloComponent } from './projet-solo/projet-solo.component';
import { ProjetComponent } from './projet/projet.component';
import { ContactComponent } from './contact/contact.component';
import { ModCvComponent } from './mod-cv/mod-cv.component';

const routes: Routes = [
  { path: '', component:  AccueilComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'projet', component: ProjetComponent},
  { path: 'projet/:id', component: ProjetSoloComponent },
  { path: 'cv/:langue', component: ModCvComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: AccueilComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
