import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {FlightService} from './flight.service';
import {Flight} from './flight';
import {Observable} from 'rxjs';
import {BASE_URL} from './flight-tokens';

@Injectable({
  providedIn: 'root'
})
export class DefaultFlightService implements FlightService{


  constructor(private http: HttpClient,
              @Inject(BASE_URL) private baseUrl: string = 'http://www.angular.at/api/') {}

  find(from: string, to: string): Observable<Flight[]> {
    const url = this.baseUrl + 'flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    return this.http.get<Flight[]>(url, {headers, params});
  }

  findById(id: string): Observable<Flight> {
    const url =  this.baseUrl + 'flight';
    const params = new HttpParams().set('id', id);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight>(url, {params, headers});
  }

}
