import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  
    this.getChlorophyll();
    this.getPokemon();
    this.getOvergrown();

  } 
  getOvergrown(){
    this._http.get("https://pokeapi.co/api/v2/ability/65/")
    .subscribe((data:any):any => {console.log("These pokemos share the ability overgrown: ", data.pokemon.length)
   })
  };

 getChlorophyll():void{
  this._http.get("https://pokeapi.co/api/v2/ability/34/")
  .subscribe((data:any):any => {console.log("These pokemos share the ability chlorophy:", data.pokemon.length)
 })
};




getPokemon(){
  let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  bulbasaur.subscribe((data:any):any => console.log("My favorite pokemon is "+data.forms[0].name+" and its abilities are: " +data.abilities[0].ability.name+", "+data.abilities[1].ability.name));
}
//    getATask(_id:number){
//     // our http response is an Observable, store it in a variable
//     let tempObservable = this._http.get('http://localhost:8080/tasks/:_id');
//     // subscribe to the Observable and provide the code we would like to do with our data from the response
//     tempObservable.subscribe(data => console.log("Got our tasks!", data));
//  };
//  postCreateTask(_id: number){
//   // our http response is an Observable, store it in a variable
//   let tempObservable = this._http.post('http://localhost:8080/tasks', _id);
//   // subscribe to the Observable and provide the code we would like to do with our data from the response
//   tempObservable.subscribe(data => console.log("Got our tasks!", data));
// };
// putUpdateTask(_id: number){
//   // our http response is an Observable, store it in a variable
//   let tempObservable = this._http.put('http://localhost:8080/tasks:_id', _id);
//   // subscribe to the Observable and provide the code we would like to do with our data from the response
//   tempObservable.subscribe(data => console.log("Got our tasks!", data));
// };
// deleteTask(_id: object){
//   // our http response is an Observable, store it in a variable
//   let tempObservable = this._http.delete('http://localhost:8080/tasks:_id', _id);
//   // subscribe to the Observable and provide the code we would like to do with our data from the response
//   tempObservable.subscribe(data => console.log("Got our tasks!", data));
// };
  
}
