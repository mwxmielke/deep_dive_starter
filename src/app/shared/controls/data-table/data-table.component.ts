import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {TableFieldDirective} from './table-field.directive';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @ContentChildren(TableFieldDirective)
  fields: QueryList<TableFieldDirective> | undefined;
  @Input() data: Array<any> = [];

  get fieldList(): TableFieldDirective[] | undefined {
    return this.fields?.toArray();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
