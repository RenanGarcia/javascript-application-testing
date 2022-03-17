import { queryString, parse } from './queryString';

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

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Renan&profession=Developer';
    expect(parse(qs)).toEqual({
      name: 'Renan',
      profession: 'Developer',
    });
  });

  it('should convert a query string of a single key-value', () => {
    const qs = 'name=Renan';
    expect(parse(qs)).toEqual({
      name: 'Renan',
    });
  });

  it('should convert a query stringto an object care of comma separated values', () => {
    const qs = 'name=Renan&abilities=JS,TDD';
    expect(parse(qs)).toEqual({
      name: 'Renan',
      abilities: ['JS', 'TDD'],
    });
  });
});
