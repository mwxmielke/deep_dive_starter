import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

export interface ExitComponent {
  canExit(): Observable<boolean>;
}

@Injectable()
export class ExitGuard implements CanDeactivate<ExitComponent> {

  canDeactivate(
    component: ExitComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> {

    return component.canExit();

  }

}
