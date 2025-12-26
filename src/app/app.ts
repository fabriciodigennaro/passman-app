import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('passman-app');
  randomNumber: number | null = null;

    generateRandom() {
      this.randomNumber = Math.floor(Math.random() * 100) + 1;
    }
}
