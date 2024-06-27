import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { DebounceSearchComponent } from './debounce-search.component';

describe('DebounceSearchComponent', () => {
  let component: DebounceSearchComponent;
  let fixture: ComponentFixture<DebounceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebounceSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DebounceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search term after debounce', fakeAsync(() => {
    const emittedValues: string[] = [];
    component.searchUpdate.subscribe((value) => {
      emittedValues.push(value);
    });

    component.updateSearchTerm('First term');
    tick(100); // Wait less than debounce time
    component.updateSearchTerm('Second term');
    tick(300); // Wait more than debounce time

    expect(emittedValues.length).toBe(1); // Only one emission after debounce
    expect(emittedValues[0]).toBe('Second term'); // Last value emitted
  }));

  it('should debounce input correctly', fakeAsync(() => {
    const emittedValues: string[] = [];
    component.searchUpdate.subscribe((value) => {
      emittedValues.push(value);
    });

    component.updateSearchTerm('First term');
    tick(100); // Wait less than debounce time
    component.updateSearchTerm('Second term');
    tick(100); // Wait less than debounce time
    component.updateSearchTerm('Third term');
    tick(300); // Wait more than debounce time

    expect(emittedValues.length).toBe(1); // Only one emission after debounce
    expect(emittedValues[0]).toBe('Third term'); // Last value emitted
  }));
});
