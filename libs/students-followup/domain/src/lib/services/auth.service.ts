import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = signal(false);


  login() {
    this.isAuthenticated.update(a => !a);
  }

  logout() {
    this.isAuthenticated.update(a => !a);
  }
}
