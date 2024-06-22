import { ReverseNamePipe } from './reverse-name.pipe';

describe('ReverseNamePipe', () => {
  let pipe: ReverseNamePipe;

  beforeEach(() => {
    pipe = new ReverseNamePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform correctly when reverse is false', () => {
    const person = { firstName: 'John', lastName: 'Doe' };
    expect(pipe.transform(person)).toEqual('John Doe');
  });

  it('should transform correctly when reverse is true', () => {
    const person = { firstName: 'John', lastName: 'Doe' };
    expect(pipe.transform(person, true)).toEqual('Doe John');
  });

  it('should return empty string for null input', () => {
    const person = null;
    expect(pipe.transform(person)).toEqual('');
  });

  it('should return empty string for undefined input', () => {
    const person = undefined;
    expect(pipe.transform(person)).toEqual('');
  });

  it('should return empty string for string input', () => {
    const person = 'invalid';
    expect(pipe.transform(person)).toEqual('');
  });
});
