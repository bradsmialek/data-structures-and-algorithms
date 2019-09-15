const insertionSort = require('../insertion-sort.js');

//Test should include;
// “Happy Path” - Expected outcome
// Expected failure
// Edge Case (if applicable/obvious)

describe('Test insertionSort', () => {

  it('it should sort an array of positive integers', () => {
    let arr = [8,7,6,5]
    expect(insertionSort(arr)).toEqual([5,6,7,8]);
  });

  it('should sort an array of negative integers', () => {
    let arr = [8,-7,6,-5]
    expect(insertionSort(arr)).toEqual([-7, -5, 6, 8]);
  });

  it('should throw a Error if a parameter value is not an integer', () => {
    let arr = [8,7,6, 'a']
    expect(insertionSort(arr)).toEqual([6,7,8,'a']);
  });

});
