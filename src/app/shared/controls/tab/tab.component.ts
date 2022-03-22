import {Component, Input, OnInit} from '@angular/core';
import {TabbedPaneComponent} from '../tabbed-pane/tabbed-pane.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() title = '';
  visible = true;

  // Variante, wenn die Componente sich selber beim Elternelement registriert
  /* constructor(private pane: TabbedPaneComponent) {
    pane.register(this);
  }*/

  constructor() {}

  ngOnInit(): void {
  }

}
