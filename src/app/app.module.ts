import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import {MenubarModule} from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import {CarouselModule} from 'primeng/carousel';
import { ElementAccueilComponent } from './element-accueil/element-accueil.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    ElementAccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    MenubarModule,
    CarouselModule,
    SelectButtonModule,
    InputSwitchModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
