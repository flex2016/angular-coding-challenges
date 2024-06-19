import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingsComponent } from './star-ratings.component';

describe('StarRatingsComponent', () => {
  let component: StarRatingsComponent;
  let fixture: ComponentFixture<StarRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarRatingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the stars array correctly for a whole number rating', () => {
    component.rating = 3;
    component.ngOnChanges({
      rating: {
        currentValue: 3,
        previousValue: 0,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    expect(component.stars).toEqual(['full', 'full', 'full', 'empty', 'empty']);
  });

  it('should set the stars array correctly for a half number rating', () => {
    component.rating = 3.5;
    component.ngOnChanges({
      rating: {
        currentValue: 3.5,
        previousValue: 0,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    expect(component.stars).toEqual(['full', 'full', 'full', 'half', 'empty']);
  });

  it('should set the stars array correctly for a rating of 5', () => {
    component.rating = 5;
    component.ngOnChanges({
      rating: {
        currentValue: 5,
        previousValue: 0,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    expect(component.stars).toEqual(['full', 'full', 'full', 'full', 'full']);
  });

  // it('should return the correct number of full stars', () => {
  //   component.rating = 3.5;
  //   expect(component.fullStars.length).toBe(3);
  // });

  // it('should correctly identify if there is a half star', () => {
  //   component.rating = 3.5;
  //   expect(component.hasHalfStar).toBeTruthy();
  //   component.rating = 3.4;
  //   expect(component.hasHalfStar).toBeFalsy();
  // });

  // it('should not have a half star if the rating is 5', () => {
  //   component.rating = 5;
  //   expect(component.hasHalfStar).toBeFalsy();
  // });

  // it('should return the correct number of empty stars', () => {
  //   component.rating = 3.5;
  //   expect(component.emptyStars.length).toBe(1);
  //   component.rating = 3;
  //   expect(component.emptyStars.length).toBe(2);
  //   component.rating = 5;
  //   expect(component.emptyStars.length).toBe(0);
  // });
});
