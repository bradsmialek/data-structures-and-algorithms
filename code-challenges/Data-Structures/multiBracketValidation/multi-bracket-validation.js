'use strict';

function parenthesesAreBalanced(string) {
  let bracketString = '[]{}()';
  let stack = [];
  if(typeof string !== 'string'){return null;}
  for(let i = 0; i < string.length; i++) {
    let typeOfBracket = string[i]
    let bracketIndexPosition = bracketString.indexOf(typeOfBracket);
    if(bracketIndexPosition === -1) {
      continue;
    }
    if(bracketIndexPosition % 2 === 0) {
      stack.push(bracketIndexPosition + 1);
    } else {
      if(stack.length === 0 || stack.pop() !== bracketIndexPosition) {
        return false;
      }
    }
  }
  return stack.length === 0;
}


module.exports = parenthesesAreBalanced;
