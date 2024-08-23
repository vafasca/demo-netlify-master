import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const pokemonUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=30';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get<any>(pokemonUrl);
  }

}
