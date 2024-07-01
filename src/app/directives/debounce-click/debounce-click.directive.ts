import {
  Directive,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Output() debounceClick = new EventEmitter<Event>();
  private clicks = new Subject<Event>();
  private subscription!: Subscription;

  ngOnInit(): void {
    const debounceTimeInMs = 500;

    this.subscription = this.clicks
      .pipe(debounceTime(debounceTimeInMs))
      .subscribe((event: Event) => this.debounceClick.emit(event));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
