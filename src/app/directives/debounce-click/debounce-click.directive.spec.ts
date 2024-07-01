import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebounceClickDirective } from './debounce-click.directive';
import { tick, fakeAsync } from '@angular/core/testing';

@Component({
  template: ` <div appDebounceClick (debounceClick)="onClick($event)"></div> `,
})
class TestComponent {
  clicked = false;

  onClick(event: Event) {
    this.clicked = true;
  }
}

describe('DebounceClickDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, DebounceClickDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should debounce click events', fakeAsync(() => {
    const divElement = fixture.debugElement.query(
      By.directive(DebounceClickDirective)
    ).nativeElement;

    divElement.click(); // First click
    divElement.click(); // Second click shortly after

    expect(component.clicked).toBe(false); // Should not have emitted click yet

    tick(500); // Advance the fakeAsync clock by 500ms (debounceTime)

    expect(component.clicked).toBe(true); // Should emit click event after debounce time
  }));

  afterEach(() => {
    fixture.destroy();
  });
});
