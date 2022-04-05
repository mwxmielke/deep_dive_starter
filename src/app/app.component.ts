import {Component, OnInit} from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import {debounce, debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  showLoadingIndicator = false;

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.router.events.pipe(
      filter(e => e instanceof NavigationStart
        || e instanceof NavigationEnd
        || e instanceof  NavigationError
        || e instanceof NavigationCancel),
      debounceTime(300))
      .subscribe(event => {
        this.showLoadingIndicator = event instanceof NavigationStart;
      });
    }
}
