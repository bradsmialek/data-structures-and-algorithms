'use strict';

const multiBracket = require('../multiBracketValidation/multi-bracket-validation.js');

//Test should include;
// “Happy Path” - Expected outcome
// Expected failure
// Edge Case (if applicable/obvious)

describe('multi-Bracket Validation', () => {
  
  it('should return `null` for an argument that is not a string', () => {
    const str = 0;
    expect(multiBracket(str)).toBeNull();
  });

  it('should return false for a single starting bracket', () => {
    const str = '{';
    expect(multiBracket(str)).toBeFalsy();
  });

  it('should return true for consecutive paired brackets', () => {
    const str = '{}(){}';
    expect(multiBracket(str)).toBeTruthy();
  });

  it('should return true for balanced brackets with nested non-bracket characters', () => {
    const str = '[[[{star}g]]]';
    expect(multiBracket(str)).toBeTruthy();
  });

  it('should be false if the brackets are unbalanced', () => {
    const str = '[({})';
    expect(multiBracket(str)).toBeFalsy();
  });

});
