import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { List } from './list/list/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-angular');
  nombreProyecto = 'Aprendiendo Angular';
  descripcion = 'Angular'
}
