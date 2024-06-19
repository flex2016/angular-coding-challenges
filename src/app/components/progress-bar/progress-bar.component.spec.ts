import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default value and max', () => {
    expect(component.value).toBe(50);
    expect(component.max).toBe(100);
  });

  it('should increase value by 5 when increaseValue is called', () => {
    component.value = 50;
    component.increaseValue();
    expect(component.value).toBe(55);
  });

  it('should not increase value above max', () => {
    component.value = 100;
    component.increaseValue();
    expect(component.value).toBe(100);
  });

  it('should decrease value by 5 when decreaseValue is called', () => {
    component.value = 50;
    component.decreaseValue();
    expect(component.value).toBe(45);
  });

  it('should not decrease value below 0', () => {
    component.value = 0;
    component.decreaseValue();
    expect(component.value).toBe(0);
  });
});
