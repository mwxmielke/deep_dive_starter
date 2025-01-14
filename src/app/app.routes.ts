// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {BasketComponent} from './basket/basket.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
      path: 'flight-booking',
      loadChildren: () => import('./flight-booking/flight-booking.module').then(m => m.FlightBookingModule),
      // loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
      data: {
        preload: true
      }
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
      path: 'basket',
      component: BasketComponent,
      outlet: 'aux'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
