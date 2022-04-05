import {Injectable} from '@angular/core';
import {FlightService} from '../flight.service';
import {Flight} from '../flight';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FlightResolver implements Resolve<Flight> {

  constructor(private flightService: FlightService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight>  {
    const id = route.params.id;
    return this.flightService.findById(id).pipe(delay(3000));
  }
}
