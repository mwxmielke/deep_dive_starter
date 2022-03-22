// src/app/default-flight.service.ts

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  readonly flights$;
  private flightsSubject = new BehaviorSubject<Flight[]>([]);

  // We will refactor this to an observable in a later exercise!
  // flights: Flight[] = [];

  constructor(private http: HttpClient) {
    this.flights$ = this.flightsSubject.asObservable();
  }

  load(from: string, to: string): void {
    this.find(from, to).subscribe(
      (flights) => {
        this.flightsSubject.next(flights);
      },
      (err) => {
        console.error('error', err);
      }
    );
  }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    return this.http.get<Flight[]>(url, {headers, params});
  }

  delay(): void {
    const currentFlights = this.flightsSubject.value;
    const currentFirstFlight = currentFlights[0];
    const date = new Date(currentFlights[0].date);

    const newDate = new Date(date.getTime() + 1000 * 60 * 15);
    const newFlight: Flight = {...currentFirstFlight, date: newDate.toISOString()};
    const flights = [newFlight, ...currentFlights.slice(1)];
    this.flightsSubject.next(flights);
  }

}
