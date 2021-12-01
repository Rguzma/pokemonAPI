import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
pokemon: any ;
  constructor(private _pokemon: HttpService) { }

  ngOnInit(): void {
  //   console.log("Before loading pokemons: ", this.pokemon);
  //   let bulbasaur = this._pokemon.getPokemon();

  //   bulbasaur.subscribe(
  //     (data:any) =>{
  //       console.log("estos es data: "+data)
  //       this.pokemon=data
  //       console.log("Este es Bulbasaur: "+this.pokemon)
  //       console.log("esta es la primera habilidad de Bulbasaur: "+this.pokemon.abilities[0].ability.name)
  //     },
  //     (error:any) =>{
  //       console.log("something went wrong", error);
  //     })
    
  // };
  // ngOnInit2(): void {
  //   console.log("Before loading pokemons: ", this.pokemon);
  //   let overgrown = this._pokemon.getOvergrown();

  //   overgrown.subscribe(
  //     (data:any) =>{
  //       this.pokemon=data
  //       console.log("Este es overgrown: "+this.pokemon)
  //       console.log("esta es la primera habilidad de Bulbasaur: "+this.pokemon.pokemon[0].pokemon.name)
  //     },
  //     (error:any) =>{
  //       console.log("something went wrong", error);
  //     })
    
  }

}
