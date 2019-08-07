'use strict';


function parenthesesAreBalanced(string) {
  var parentheses = '[]{}()';
  let stack = [];
  console.log(string);
    
  for(let i = 0; i < string.length; i++) {
    let character = string[i]
    let bracePosition = parentheses.indexOf(character);

    console.log('i =',i , 'character =',character, 'bracePosition =', bracePosition);

    if(bracePosition === -1) {
      console.log(bracePosition === -1);
      continue;
    }

    if(bracePosition % 2 === 0) {
      console.log(bracePosition % 2);
      stack.push(bracePosition + 1); // push next expected brace position
      console.log('stack =',stack);
    } else {
      console.log(bracePosition % 2);
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

parenthesesAreBalanced('[{yup))');
parenthesesAreBalanced('[[[{star}g]]]');
parenthesesAreBalanced('[](){}');
parenthesesAreBalanced('[');

module.exports = parenthesesAreBalanced;
