import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDetail } from '../../core/models/poke-detail.model';
import { PokeImgPipe } from '../card/poke-img-pipe';
import { NgOptimizedImage } from "../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, PokeImgPipe, NgOptimizedImage],
  template: `
  <div class="modal-overlay" (click)="closeModal()">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <button class="close-btn" (click)="closeModal()">&times;</button>

      <div class="poke-info" *ngIf="pokemonDetail()">
        <div class="pokemon-header">
          <img 
            [ngSrc]="pokemonDetail()?.sprites?.other['official-artwork']?.front_default || pokemonDetail()?.sprites?.front_default || ''" 
            [alt]="pokemonDetail()?.name"
            width="200"
            height="200"
            class="pokemon-image"
          />
          <div class="pokemon-basic-info">
            <h2>#{{ pokemonDetail()?.id }} {{ pokemonDetail()?.name | titlecase }}</h2>
            <div class="types">
              <span>
                *ngFor="let type of pokemonDetail()?.types"
                class="type-badge"
                [class]="'type-' + type.type.name"
              >
                {{ type.type.name | titlecase }}
              </span>
            </div>
          </div>
        </div>

        <div class="pokemon-stats">
          <div class="stat-group">
            <h3>Stats</h3>
            <div class="stats-grid">
              <div class="stat-item" *ngFor="let stat of pokemonDetail()?.stats">
                <span class="stat-name">{{ stat.stat.name | titlecase }}</span>
                <div class="stat-bar">
                  <div class="stat-bar-fill" [style.width]="stat.base_stat + '%'"></div>
                </div>
                <span class="stat-value">{{ stat.base_stat }}</span>
              </div>
            </div>
          </div>

          <div class="stat-group">
              <h3>Habilidades</h3>
              <div class="abilities">
                <span 
                  *ngFor="let ability of pokemonDetail()?.abilities" 
                  class="ability-badge"
                  [class.hidden]="ability.is_hidden"
                >
                  {{ ability.ability.name | titlecase }}
                  <span class="hidden-label" *ngIf="ability.is_hidden">(Oculta)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="loading" *ngIf="!pokemonDetail()">
          <p>Cargando información del Pokémon...</p>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './modal.css'
})
export class Modal {
  readonly pokemonDetail = signal<PokeDetail | null>(null);
  readonly isOpen = input.required<boolean>();
  readonly closeModal = output<void>();

  setPokemonDetail(detail: PokeDetail) {
    this.pokemonDetail.set(detail);
  }
}
