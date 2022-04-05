// src/app/flight-booking/flight-booking.module.ts

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FormsModule } from '@angular/forms';
import {DefaultFlightService} from './default-flight.service';
import {DummyFlightService} from './dummy-flight.service';
import {FLIGHT_SERVICES} from './flight-tokens';

@NgModule({
  imports: [
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    FormsModule,
    SharedModule.forChild()
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightBookingComponent,
    FlightEditComponent,
  ],
  /*providers: [{
    provide: FLIGHT_SERVICES,
    useClass: DefaultFlightService,
    multi: true
  },
    {
      provide: FLIGHT_SERVICES,
      useClass: DummyFlightService,
      multi: true
    }],*/
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
