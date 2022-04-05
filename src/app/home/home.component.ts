import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  needsLogin = false;

  constructor(private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.needsLogin = !!this.route.snapshot.paramMap.get('needsLogin');
  }

  get userName(): string {
    return this.authService.userName;
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

}
