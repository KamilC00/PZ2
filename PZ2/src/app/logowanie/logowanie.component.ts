import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


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
    errorMessage?: boolean = undefined;
    loginMessage?: boolean = undefined;

  logowanie() {
    this.loginMessage = undefined
    this.errorMessage = undefined
    if (this.formData.username === 'admin' && this.formData.password === 'admin') {
      this.errorMessage = false
      this.loginMessage = true
      console.log('Zalogowano poprawnie.')
    } else {
      this.errorMessage = true
      this.loginMessage = false
      console.error('Błąd logowania.')
    }
  }
}
