import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';

describe('CreditCardFormatterPipe', () => {
  let pipe: CreditCardFormatterPipe;

  beforeEach(() => {
    pipe = new CreditCardFormatterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format valid credit card number with dashes', () => {
    const result = pipe.transform('1111222233334444');
    expect(result).toBe('1111-2222-3333-4444');
  });

  it('should return error for null value', () => {
    const result = pipe.transform(null);
    expect(result).toBe('Error: No credit card number provided');
  });

  it('should return error for undefined value', () => {
    const result = pipe.transform(undefined);
    expect(result).toBe('Error: No credit card number provided');
  });

  it('should return error for invalid characters', () => {
    const result = pipe.transform('1111abcd33334444');
    expect(result).toBe('Error: Invalid characters');
  });

  it('should return error for invalid length (less than 16 digits)', () => {
    const result = pipe.transform('111122223333');
    expect(result).toBe('Error: Invalid length');
  });

  it('should return error for invalid length (more than 16 digits)', () => {
    const result = pipe.transform('111122223333444455');
    expect(result).toBe('Error: Invalid length');
  });
});
