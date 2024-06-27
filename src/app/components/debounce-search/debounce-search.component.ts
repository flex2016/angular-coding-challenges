import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrl: './debounce-search.component.scss',
})
export class DebounceSearchComponent {
  @Input() searchTerm = '';
  @Input() placeholder = 'Search';
  @Output() searchUpdate = new EventEmitter<string>();
  private searchUpdate$ = new Subject<string>();

  constructor() {
    this.searchUpdate$
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((value) => {
        this.searchUpdate.emit(value);
      });
  }

  updateSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }
}
