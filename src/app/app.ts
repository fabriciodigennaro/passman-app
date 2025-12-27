import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { CreateModalComponent } from './components/create-modal/create-modal';
import { Pass } from './models/pass.model';
import { PassStorageService } from './services/pass-storege.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CreateModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('passman-app');
  view: 'create' | 'stored' = 'stored';
  showModal = false;

  passwords: Pass[] = [];
  selected?: Pass;

  constructor(private storage: PassStorageService) {}

  async ngOnInit() {
    await this.load();
  }

  async load() {
    this.passwords = await this.storage.getAll();
  }

  openCreate() {
    this.showModal = true;
  }

  async closeModal() {
    this.showModal = false;
    await this.load();
  }

  select(pass: Pass) {
    this.selected = pass;
  }
}
