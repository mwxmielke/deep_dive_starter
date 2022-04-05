// src/app/shared/shared.module.ts

import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { FormsModule } from '@angular/forms';

// Von der CLI eingefügt
import { CityValidationDirective } from './validation/city-validation.directive';
import { TabbedPaneComponent } from './controls/tabbed-pane/tabbed-pane.component';
import { TabComponent } from './controls/tab/tab.component';
import { TabNavigatorComponent } from './controls/tab-navigator/tab-navigator.component';
import { ClickWithWarningDirective } from './controls/click-with-warning.directive';
import { TooltipDirective } from './tooltip.directive';
import { TableFieldDirective } from './controls/data-table/table-field.directive';
import { DataTableComponent } from './controls/data-table/data-table.component';
import { CustomTemplateOutletDirective } from './custom-template-outlet.directive';
import {AuthService} from './auth/auth.service';
import {ExitGuard} from "./deactivation/exit.guard";
import {AuthGuard} from "./auth/auth.guard";
import {CityService} from "./city.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,

    // Von der CLI eingefügt
    CityValidationDirective,
     TabbedPaneComponent,
     TabComponent,
     TabNavigatorComponent,
     ClickWithWarningDirective,
     TooltipDirective,
     TableFieldDirective,
     DataTableComponent,
     CustomTemplateOutletDirective
  ],
  exports: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    FormsModule,
    CommonModule,

    // Neue Einträge
    CityValidationDirective,
     TabbedPaneComponent,
     TabComponent,
     TabNavigatorComponent,
     ClickWithWarningDirective,
     TooltipDirective,
     TableFieldDirective,
     DataTableComponent,
     CustomTemplateOutletDirective
  ]
})
export class SharedModule {
  // Darf von allen anderen Modulen aufgerufen werden, dann wird sichergestellt, dass die services nicht erneut registriert werden
  static forChild(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [ /* Keine Provider hier, siehe forRoot */ ]
    };
  }

  // Darf nur einmal von app module aufgerufen werden, dann wird sichergestellt, dass alle Services for root registriert werden
  // Sinnvolles Beispiel Router
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        AuthGuard,
        ExitGuard,
        CityService,
      ]
    };
  }
}
