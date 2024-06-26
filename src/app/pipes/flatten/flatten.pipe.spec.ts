import { FlattenPipe } from './flatten.pipe';

describe('FlattenPipe', () => {
  let pipe: FlattenPipe;

  beforeEach(() => {
    pipe = new FlattenPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should flatten a single-level array', () => {
    const input = [1, 2, 3];
    const output = pipe.transform(input);
    expect(output).toEqual([1, 2, 3]);
  });

  it('should flatten a nested array', () => {
    const input = [1, [2, 3], [4, [5, 6]], 7];
    const output = pipe.transform(input);
    expect(output).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should flatten a deeply nested array', () => {
    const input = [1, [2, [3, [4, [5]]]]];
    const output = pipe.transform(input);
    expect(output).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    const input: any[] = [];
    const output = pipe.transform(input);
    expect(output).toEqual([]);
  });

  it('should handle arrays with non-array elements', () => {
    const input = [1, 'a', [true, [null, undefined]], 3];
    const output = pipe.transform(input);
    expect(output).toEqual([1, 'a', true, null, undefined, 3]);
  });

  it('should handle arrays with multiple data types', () => {
    const input = [1, ['a', [true, [null, [undefined, { key: 'value' }]]]], 3];
    const output = pipe.transform(input);
    expect(output).toEqual([
      1,
      'a',
      true,
      null,
      undefined,
      { key: 'value' },
      3,
    ]);
  });
});
