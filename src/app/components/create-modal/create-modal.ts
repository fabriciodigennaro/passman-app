import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PassStorageService } from '../../services/pass-storege.service';
import { Pass } from '../../models/pass.model';

@Component({
  selector: 'app-create-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-modal.html',
  styleUrls: ['./create-modal.css'],
})
export class CreateModalComponent {
  name = '';
  username = '';
  password = '';

  @Output() closed = new EventEmitter<void>();

  constructor(private storage: PassStorageService) {}

  async save() {
    const pass = new Pass(crypto.randomUUID(), this.name, this.username, this.password);

    await this.storage.save(pass);
    this.close();
  }

  close() {
    this.closed.emit();
  }
}
