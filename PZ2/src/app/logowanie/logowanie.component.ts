import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,RouterLinkActive, FormsModule],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css'
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: ''
  }
    errorMessage: string = '';

  logowanie() {
    if (this.formData.username === 'admin' && this.formData.password === 'admin') {
      console.log('Zalogowano poprawnie.')
    } else {
      //this.errorMessage = 'Błąd logowania'
      console.error('Błąd logowania.')
    }
  }
}
