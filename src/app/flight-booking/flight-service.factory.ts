import { HttpClient } from '@angular/common/http';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';
const DEBUG = true;
export const createFlightService = (http: HttpClient) => {
  if (!DEBUG) {
    return new DefaultFlightService(http, 'http://www.angular.at/api/flight');
  }
  else {
    return new DummyFlightService();
  }
};
