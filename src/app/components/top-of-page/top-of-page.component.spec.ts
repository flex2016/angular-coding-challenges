import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfPageComponent } from './top-of-page.component';

describe('TopOfPageComponent', () => {
  let component: TopOfPageComponent;
  let fixture: ComponentFixture<TopOfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopOfPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially hide the button', () => {
    expect(component.showButton).toBeFalsy();
  });

  it('should show the button after scrolling past 400px', () => {
    // Simulate scrolling past 400px
    window.pageYOffset = 500;
    component.onWindowScroll();
    expect(component.showButton).toBeTruthy();
  });
  it('should not show the button when scrolling below 400px', () => {
    // Simulate scrolling below 400px
    window.pageYOffset = 300;
    component.onWindowScroll();
    expect(component.showButton).toBeFalsy();
  });
});
