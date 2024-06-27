import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have isOn set to false by default', () => {
    expect(component.isOn).toBe(false);
  });
  it('should toggle isOn when the toggle method is called', () => {
    component.toggle();
    expect(component.isOn).toBe(true);
    component.toggle();
    expect(component.isOn).toBe(false);
  });
});
