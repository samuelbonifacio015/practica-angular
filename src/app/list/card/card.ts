import { Component, input } from '@angular/core';
import { PokeResult } from '../../core/models/poke-result.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
  <div class="poke-card">
    <img
      width="120"
      height="120"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      [alt]="pokeResult()?.name || 'Pokémon'"
    />
    <p>{{ pokeResult()?.name || 'Sin nombre' }}</p>
  </div>
  `,
  styleUrl: './card.css'
})
export class Card {
  readonly pokeResult = input.required<PokeResult>();
}
