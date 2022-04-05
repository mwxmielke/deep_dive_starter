// src/app/default-flight.service.ts

import {Observable} from 'rxjs';
import {Flight} from './flight';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {createFlightService} from './flight-service.factory';


// Using factory to decide which provider should be used
@Injectable({
  providedIn: 'root',
  useFactory: createFlightService,
  deps: [HttpClient]
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
  abstract findById(id: string): Observable<Flight>;

}
