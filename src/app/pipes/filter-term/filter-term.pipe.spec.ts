import { FilterTermPipe } from './filter-term.pipe';

describe('FilterTermPipe', () => {
  let pipe: FilterTermPipe;

  beforeEach(() => {
    pipe = new FilterTermPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the original array if searchTerm is not provided', () => {
    const items = ['Apple', 'Banana', 'Cherry'];
    expect(pipe.transform(items)).toEqual(items);
  });

  it('should return the original array if searchTerm is empty', () => {
    const items = ['Apple', 'Banana', 'Cherry'];
    expect(pipe.transform(items, '')).toEqual(items);
  });

  it('should filter the array based on searchTerm', () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Orange'];
    expect(pipe.transform(items, 'an')).toEqual(['Banana', 'Orange']);
  });

  it('should be case insensitive', () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Orange'];
    expect(pipe.transform(items, 'An')).toEqual(['Banana', 'Orange']);
  });

  it('should return an empty array if the items array is empty', () => {
    expect(pipe.transform([], 'an')).toEqual([]);
  });
});
