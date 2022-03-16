import queryString from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when object is provided', () => {
    const obj = {
      name: 'Renan',
      isAnOldMan: false,
    };
    expect(queryString(obj)).toBe('name=Renan&isAnOldMan=false');
  });

  it('should create a valid qyert string even when an array is passed as value', () => {
    const obj = {
      name: 'Renan',
      abilities: ['javascript', 'typescript', 'react'],
    };
    expect(queryString(obj)).toBe(
      'name=Renan&abilities=javascript,typescript,react'
    );
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Renan',
      abilities: {
        first: 'javascript',
        second: 'typescript',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});
