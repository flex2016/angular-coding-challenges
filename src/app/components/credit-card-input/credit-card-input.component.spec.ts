import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardInputComponent } from './credit-card-input.component';

describe('CreditCardInputComponent', () => {
  let component: CreditCardInputComponent;
  let fixture: ComponentFixture<CreditCardInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditCardInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreditCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty credit card number by default', () => {
    const component = new CreditCardInputComponent();
    expect(component.creditCardNumber).toBe('');
  });
  it('should set the credit card number', () => {
    const component = new CreditCardInputComponent();
    component.creditCardNumber = '1234-5678-9012-3456';
    expect(component.creditCardNumber).toBe('1234-5678-9012-3456');
  });

  it('should not change the credit card number when setting readonly flag with empty value', () => {
    const component = new CreditCardInputComponent();
    component.isReadonly = true;
    component.creditCardNumber = '';
    expect(component.creditCardNumber).toBe('');
  });
});
