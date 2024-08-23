import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonImageUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private pokemonService: PokemonService) {}

  loadPokemons = () => {
    this.pokemonService.getPokemons().subscribe({
      next: (data: any) => {
        this.pokemons = data.results;
      },
      error: (e) => {
        console.log(e);
      },
    });
  };

  ngOnInit(): void {
    this.loadPokemons();
  }
}
