// src/app/flight-search/flight-search.component.ts

import {Component, Inject, OnInit} from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import {BehaviorSubject, merge} from 'rxjs';
import {DummyFlightService} from "../dummy-flight.service";
import {DefaultFlightService} from "../default-flight.service";
import {FLIGHT_SERVICES} from "../flight-tokens";

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
  //  introduce a local provider
  /* providers: [
    {
      provide: FlightService,
      useClass: DefaultFlightService
    }
  ]*/
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  selectedFlight: Flight | null = null;
  delayFilter = false;
  flights$ = new BehaviorSubject<Flight[]>([]);

  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  // Please note, that we need to use Inject with the FlightService type, because Arrays (e. g. FlightService[]) cannot be used as Tokens.
  constructor(@Inject(FLIGHT_SERVICES) private flightServices: FlightService[]) {
  }

  ngOnInit(): void {
  }

  search(): void {
    const observables = this.flightServices.map(fs => fs.find(this.from, this.to));
    /* this.flightService.find(this.from, this.to).subscribe(
      (flights) => {
        this.flights$.next(flights);
      },
      (err) => {
        console.error('error', err);
      }
    );*/

    // Merge results of individual observables:
    const observable = merge(...observables);
    // This is the same as: merge(observables[0], observables[1], ...)
    observable.subscribe({
      next: (additionalFlights) => {
        this.flights$.next([...this.flights$.getValue(), ...additionalFlights]);
      },
      error: (err) => {
        console.debug('Error', err);
      }
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
