import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeList } from '../models/poke-list.model';
import { PokeDetail } from '../models/poke-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  readonly #pokeUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokeList(): Observable<PokeList> {
    return this.http.get<PokeList>(`${this.#pokeUrl}/pokemon?limit=151`);
  }

  getPokeDetail(nameOrId: string | number): Observable<PokeDetail> {
    return this.http.get<PokeDetail>(`${this.#pokeUrl}/pokemon/${nameOrId}`);
  }
}
