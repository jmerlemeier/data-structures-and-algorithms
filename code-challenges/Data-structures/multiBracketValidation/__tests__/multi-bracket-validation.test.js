'use strict';

const { Stack, validateBrackets } = require('../multi-bracket-validation.js');


describe('Test Challenge 1', () => {
  test('Will return \'true\' representing that the brackets in the string are balanced.', () => {
    //code here
    expect(validateBrackets('{}{Code}[Fellows](())')).toBe(true);
  });
  test('Will return \'true\' - the brackets are balanced.', () => {
    expect(validateBrackets('()')).toBe(true);
  })
  test('Will return \'true\' - the brackets are balanced.', () => {
    expect(validateBrackets('{}(){}')).toBe(true);
  })
  test('Will return \'true\' - the brackets are balanced.', () => {
    expect(validateBrackets('(){}[[]]')).toBe(true);
  })
});

describe('Test Challenge 2', () => {
  test('Will return \'false\'  representing the brackets in the string are NOT balanced.', () => {
    //code here
    expect(validateBrackets('{(()})')).toBe(false);
  });
  test('Will return \'false\'  - brackets are NOT balanced.', () => {
    //code here
    expect(validateBrackets('[({}]')).toBe(false);
  });
  test('Will return \'false\'  - brackets are NOT balanced.', () => {
    //code here
    expect(validateBrackets('(](')).toBe(false);
  });
  test('Will return \'false\'  - brackets are NOT balanced.', () => {
    //code here
    expect(validateBrackets('{(})')).toBe(false);
  });
});

