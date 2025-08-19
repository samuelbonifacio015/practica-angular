import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { PokeResult } from '../../core/models/poke-result.model';
import { PokeImgPipe } from './poke-img-pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TitleCasePipe, PokeImgPipe, NgOptimizedImage],
  template: `
  <div class="poke-card">
    <img
      width="120"
      height="120"
      [ngSrc]="pokeResult().url | pokeImg"
      [alt]="pokeResult().name || 'Pokémon'"
    />
    <p>{{ pokeResult().name | titlecase }}</p>
  </div>
  `,
  styleUrl: './card.css'
})
export class Card {
  readonly pokeResult = input.required<PokeResult>();
}
