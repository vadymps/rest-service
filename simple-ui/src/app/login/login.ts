import { Component, inject, signal } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  readonly login = new FormControl('', [Validators.required]);
  readonly password = new FormControl('', [Validators.required]);
  
  loading = signal(false);
  error = signal('');

  private authService = inject(AuthService);

  onSubmit() {
    if (this.login.invalid || this.password.invalid) {
      this.login.markAsTouched();
      this.password.markAsTouched();
      return;
    }

    this.loading.set(true);
    this.error.set('');

    const loginValue = this.login.value || '';
    const passwordValue = this.password.value || '';

    this.authService.login(loginValue, passwordValue).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.loading.set(false);
        // Handle successful login (e.g., redirect to dashboard)
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.error.set('Login failed. Please check your credentials.');
        this.loading.set(false);
      }
    });
  }
}
