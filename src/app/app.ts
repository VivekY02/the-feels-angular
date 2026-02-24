import { Component, signal } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { Head } from '../head/head';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,Head],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Project');
}
