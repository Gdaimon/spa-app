import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Heroe, HeroesService } from "../../servicios/heroes.services";

@Component( {
  selector   : "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls  : [ "./heroes.component.css" ]
} )
export class HeroesComponent implements OnInit {
  
  heroes: Heroe[] = [];
  
  constructor( private _heroes_Services: HeroesService,
               private router: Router ) {
    
  }
  
  ngOnInit() {
    this.heroes = this._heroes_Services.getHeroes();
    console.log( this.heroes );
  }
  
  public verHeroe( id: number ) {
    console.log( id );
    this.router.navigate( [ "/heroe", id ] );
  }
  
}


