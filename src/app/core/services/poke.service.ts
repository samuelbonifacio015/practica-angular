import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeList } from '../models/poke-list.model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  readonly #pokeUrl = 'https://pokeapi.co/api/v2';

  getPokeList() {
    return httpResource<PokeList>(() => `${this.#pokeUrl}/pokemon?limit=151`);
  }
}
