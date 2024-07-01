import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss',
})
export class SearchListComponent {
  searchTerm = '';
  @Input() items: string[] = [];

  hasBeenSelected = false;

  updateSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = false;
  }

  selectSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = true;
  }
}
