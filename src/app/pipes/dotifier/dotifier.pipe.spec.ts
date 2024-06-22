import { DotifierPipe } from './dotifier.pipe';

describe('DotifierPipe', () => {
  let pipe: DotifierPipe;

  beforeEach(() => {
    pipe = new DotifierPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms string correctly with default format', () => {
    const value = 'abc';
    expect(pipe.transform(value)).toEqual('a.b.c.');
  });

  it('transforms string correctly with "dotify" format', () => {
    const value = 'abc';
    expect(pipe.transform(value, 'dotify')).toEqual('a.b.c.');
  });

  it('returns same string with "same" format', () => {
    const value = 'abc';
    expect(pipe.transform(value, 'same')).toEqual('abc');
  });

  it('returns empty string for null value', () => {
    const value = null;
    expect(pipe.transform(value)).toEqual('');
  });

  it('returns empty string for undefined value', () => {
    const value = undefined;
    expect(pipe.transform(value)).toEqual('');
  });

  it('handles empty string correctly', () => {
    const value = '';
    expect(pipe.transform(value)).toEqual('.');
  });
});
