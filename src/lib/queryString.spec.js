import queryString from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when object is provided', () => {
    const obj = {
      name: 'Renan',
      isAnOldMan: false,
    };
    expect(queryString(obj)).toBe('name=Renan&isAnOldMan=false');
  });
});
