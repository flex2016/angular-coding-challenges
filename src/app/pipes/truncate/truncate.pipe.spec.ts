import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should return the original text if its length is less than the maxLength', () => {
    const text = 'Short text';
    expect(pipe.transform(text, 100)).toBe(text);
  });

  it('should truncate text that exceeds the maxLength and append "..."', () => {
    const text = 'This is a long text that needs to be truncated.';
    const expectedText = text.substring(0, 40) + '...';
    expect(pipe.transform(text, 40)).toBe(expectedText);
  });

  it('should use the default maxLength of 100 if no maxLength is provided', () => {
    const text =
      'This is a long text that needs to be truncated because it exceeds the default maximum length of 100 characters.';
    const expectedText = text.substring(0, 100) + '...';
    expect(pipe.transform(text)).toBe(expectedText);
  });

  it('should return an empty string if the value is null', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('should return an empty string if the value is undefined', () => {
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should handle empty strings correctly', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should not truncate text if maxLength is greater than text length', () => {
    const text = 'Short text';
    expect(pipe.transform(text, 20)).toBe(text);
  });

  it('should handle text exactly equal to maxLength', () => {
    const text = 'Exact length text';
    expect(pipe.transform(text, text.length)).toBe(text);
  });
});
