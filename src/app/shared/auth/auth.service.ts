import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  userName = '';

  constructor() { }

  login(): void {
    this.userName = 'Max';
  }

  logout(): void {
    this.userName = '';
  }
}
