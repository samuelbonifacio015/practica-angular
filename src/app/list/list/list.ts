import { Component, inject } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';

@Component({
  selector: 'poke-list',
  standalone: true,
  imports: [CommonModule, Card],
  template: `
    <h1 class="title">My Pokémon List</h1>
    <div class="poke-container">
      @if (pokeList$ | async; as pokeList) {
        <div class="poke-cards">
          <p>Encontrados {{ pokeList.results?.length || 0 }} Pokémon</p>
          @for (poke of pokeList.results; track poke.name) {
            <app-card [pokeResult]="poke" />
          }
        </div>
      } @else {
        <p>Loading...</p>
      }
    </div>
  `,  
  styleUrl: './list.css',
})
export class List {
  readonly #pokeService = inject(PokeService);
  protected readonly pokeList$ = this.#pokeService.getPokeList();
}
