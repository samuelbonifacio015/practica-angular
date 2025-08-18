import { Component, inject } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';

@Component({
  selector: 'poke-list',
  imports: [],
  template: `
    <h1 class="title">My Pokémon List</h1>
    <div class="poke-container">
      @if (pokeListResource.isLoading()) {
        <p>Loading...</p>
      } @else if (pokeListResource.error()) {
        <p>Error loading Pokémon</p>
      } @else {
        <div class="poke-container"></div>
      }
    </div>
  `,
  styleUrl: './list.css',
})
export class List {
  readonly #pokeService = inject(PokeService);
  protected readonly pokeListResource = this.#pokeService.getPokeList();
}
