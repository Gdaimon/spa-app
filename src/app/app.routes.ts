import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./component/about/about.component";
import { BuscadorComponent } from "./component/buscador/buscador.component";
import { HeroeComponent } from "./component/heroe/heroe.component";
import { HeroesComponent } from "./component/heroes/heroes.component";
import { HomeComponent } from "./component/home/home.component";


const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "buscar/:termino", component: BuscadorComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

// export const APP_ROUTING = RouterModule.forRoot( ROUTES, { useHash: true } );
export const APP_ROUTING = RouterModule.forRoot( ROUTES );
