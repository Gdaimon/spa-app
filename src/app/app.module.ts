import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
//Componentes
import { AppComponent } from "./app.component";
//Rutas
import { APP_ROUTING } from "./app.routes";
import { AboutComponent } from "./component/about/about.component";
import { HeroesComponent } from "./component/heroes/heroes.component";
import { HomeComponent } from "./component/home/home.component";
import { NavbarComponent } from "./component/shared/navbar/navbar.component";
//Servicios
import { HeroesService } from "./servicios/heroes.services";
import { HeroeComponent } from './component/heroe/heroe.component';
import { BuscadorComponent } from './component/buscador/buscador.component';
@NgModule( {
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BuscadorComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers   : [ HeroesService ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
