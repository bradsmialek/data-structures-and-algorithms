'use strict';

const repeat = require('../repeated-word.js');

const str = 'Once upon a time, there was a brave princess who..';
const strTwo = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..'
const strThree = 'It was a queer ! sultry summer ! the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..'

//Test should include;
// “Happy Path” - Expected outcome
// Expected failure
// Edge Case (if applicable/obvious)

describe('Test Repeat Word', () => {

  it('should return first repeated word', () => {
    expect(repeat(str)).toEqual('a');
    expect(repeat(strTwo)).toEqual('was');
    expect(repeat(strThree)).toEqual('the');
  });

  it('should not accept other data types', () => {
    let string = [6,'hi'];
    expect(repeat(string)).toBe(undefined);
  });

  it('should omit special characters', () => {
    let string = strThree;
    expect(repeat(string)).toEqual('the');
  });

});