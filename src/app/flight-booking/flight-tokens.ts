import { InjectionToken } from '@angular/core';
import {FlightService} from './flight.service';

export const FLIGHT_SERVICES = new InjectionToken<FlightService>('FLIGHT_SERVICES');
export const BASE_URL = new InjectionToken<string>('BASE_URL', {
  providedIn: 'root',
  factory: () => 'http://demo.ANGULARarchitects.io/api/'
});

// 'http://www.angular.at/api/flight'
