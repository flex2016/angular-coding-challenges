import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent {
  @Input() totalItems = 1;
  @Input() pageSize = 25;
  @Input() currentPage = 1;
  @Input() step = 2;
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
  }

  get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  get isPreviousDisabled(): boolean {
    return this.currentPage - this.step < 1;
  }

  get isNextDisabled(): boolean {
    return this.currentPage + this.step > this.totalPages;
  }

  get pages(): number[] {
    const pages: number[] = [];
    const start = Math.max(1, this.currentPage - this.step);
    const end = Math.min(this.totalPages, this.currentPage + this.step);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
  }
}
