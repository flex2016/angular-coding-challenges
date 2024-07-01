import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.counter).toBe(0);
    expect(component.min).toBe(0);
    expect(component.max).toBe(Number.MAX_SAFE_INTEGER);
  });

  it('should not decrement counter below min value', () => {
    component.counter = 0;
    component.min = 0;
    component.minusOne();
    expect(component.counter).toBe(0);
  });

  it('should not increment counter above max value', () => {
    component.counter = Number.MAX_SAFE_INTEGER;
    component.max = Number.MAX_SAFE_INTEGER;
    component.addOne();
    expect(component.counter).toBe(Number.MAX_SAFE_INTEGER);
  });

  it('should decrement the counter', () => {
    component.counter = 1;
    component.min = 0;
    component.minusOne();
    expect(component.counter).toBe(0);
  });

  it('should increment the counter', () => {
    component.counter = 0;
    component.max = 1;
    component.addOne();
    expect(component.counter).toBe(1);
  });
});
