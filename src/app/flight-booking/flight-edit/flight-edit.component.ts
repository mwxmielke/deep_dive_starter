// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ExitComponent} from '../../shared/deactivation/exit.guard';
import {Observable, Observer} from 'rxjs';
import {Flight} from '../flight';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit, ExitComponent {

  id = 0;
  showDetails = false;
  showWarning = false;
  observer?: Observer<boolean>;
  flight?: Flight;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
      this.showDetails = p.showDetails;
    });

    this.route.data.subscribe(data => {
      this.flight = data.flight;
    });
  }

  decide(decision: boolean): void {
    this.showWarning = false;
    this.observer?.next(decision);
  }

  canExit(): Observable<boolean> {
    this.showWarning = true;
    return new Observable<boolean>((observer) => {
      this.observer = observer;
    });
  }


}
