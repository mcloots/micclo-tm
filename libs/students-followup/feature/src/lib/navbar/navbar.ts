import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@micclo-tm/domain'

@Component({
  selector: 'lib-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  public readonly authService = inject(AuthService);

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
