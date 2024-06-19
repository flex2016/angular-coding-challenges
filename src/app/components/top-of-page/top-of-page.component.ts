import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
})
export class TopOfPageComponent {
  showButton: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yCoordinate = this.viewportScroller.getScrollPosition()[1];
    this.showButton = yCoordinate > 400;
  }

  public scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
