import {AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';
import {TabbedPaneService} from './tabbed-pane.service';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.scss'],
  viewProviders: [TabbedPaneService]
})
export class TabbedPaneComponent implements OnInit, AfterContentInit, AfterViewInit {

  // Variante, wenn die Componente sich selber beim Elternelement registriert
  // tabs: Array<TabComponent> = [];

  @ContentChildren(TabComponent)
  tabQueryList: QueryList<TabComponent> | undefined;

  activeTab: TabComponent | undefined;
  currentPage = 0;

  get tabs(): TabComponent[] {
    return this.tabQueryList?.toArray() ?? [];
  }

  constructor(private service: TabbedPaneService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if (this.tabs.length > 0){
      this.activate(this.tabs[0]);
    }
  }

  ngAfterViewInit(): void {
    this.service.pageCount.next(this.tabs.length);
    this.service.currentPage.subscribe((page: number) => {
      // Prevent cycle:
      if (page === this.currentPage) {
        return;
      }
      this.pageChange(page);
    });
  }

  register(tab: TabComponent): void {
    this.tabs.push(tab);
  }

  activate(activeTab: TabComponent): void {
    for (const tab of this.tabs) {
      tab.visible = tab === activeTab;
    }
    this.activeTab = activeTab;
    this.currentPage = this.tabs.indexOf(activeTab) + 1;
    this.service.currentPage.next(this.currentPage);
  }

  pageChange(page: number): void {
    this.activate(this.tabs[page - 1]);
  }
}
