import {CanActivate, Router, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.userName) {
      return true;
    }
    // this.router.navigate(['/home', { needsLogin: true }]);
    // hübscher
    return this.router.createUrlTree(['/home', { needsLogin: true }]);
  }

}
