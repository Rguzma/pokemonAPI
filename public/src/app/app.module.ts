import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpService } from './http.service';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
// import { UserComponent } from './user/user.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
