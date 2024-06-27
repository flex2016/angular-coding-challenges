import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a quote', () => {
    component.quote = 'Test Quote';
    expect(component.quote).toBe('Test Quote');
  });

  it('should have an author', () => {
    component.author = 'Test Author';
    expect(component.author).toBe('Test Author');
  });

  it('should have an occupation', () => {
    component.occupation = 'Test Occupation';
    expect(component.occupation).toBe('Test Occupation');
  });

  it('should display the quote, author, and occupation', () => {
    component.quote = 'Test Quote';
    component.author = 'Test Author';
    component.occupation = 'Test Occupation';
    fixture.detectChanges();
    const quoteElement =
      fixture.debugElement.nativeElement.querySelector('p.quote');
    const authorElement =
      fixture.debugElement.nativeElement.querySelector('p.author');
    const occupationElement =
      fixture.debugElement.nativeElement.querySelector('p.occupation');
    expect(quoteElement.textContent).toBe('Test Quote');
    expect(authorElement.textContent).toBe('Test Author');
    expect(occupationElement.textContent).toBe('Test Occupation');
  });
});
