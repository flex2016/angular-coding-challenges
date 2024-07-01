import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent {
  @Input() tableData: { [key: string]: any }[] = [
    { first: 'John 1', last: 'Doe', dob: '01/15/2000' },
    { first: 'John 2', last: 'Doe', dob: '01/15/2000' },
    { first: 'John 3', last: 'Doe', dob: '01/15/2000' },
    { first: 'John 4', last: 'Doe', dob: '01/15/2000' },
  ];

  @Output() headerSelected = new EventEmitter<{
    key: string;
    value: any;
  }>();

  headerSelection(key: string, value: any): void {
    this.headerSelected.emit({ value, key });
  }
}
