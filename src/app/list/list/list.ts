import { Component, inject } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'poke-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="title">My Pokémon List</h1>
    <div class="poke-container">
      @if (pokeList$ | async; as pokeList) {
        <div class="poke-cards">
          @for (poke of pokeList.results; track poke.name) {
            <div class="poke-card">
              <h3>{{ poke.name }}</h3>
              <p>{{ poke.url }}</p>
            </div>
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
