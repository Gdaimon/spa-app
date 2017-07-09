import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Heroe, HeroesService } from "../../servicios/heroes.services";

@Component( {
  selector   : "app-buscador",
  templateUrl: "./buscador.component.html",
  styleUrls  : [ "./buscador.component.css" ]
} )
export class BuscadorComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
  
  constructor( private activateRoute: ActivatedRoute,
               private _heroesServices: HeroesService ) {
  }
  
  ngOnInit() {
    
    this.activateRoute.params.subscribe( params => {
      this.termino = params[ "termino" ];
      this.heroes = this._heroesServices.buscarHeroes( params[ "termino" ] );
      console.log( this.heroes );
    } );
  }
  
  
}
