'use strict';


function multiBracketValidation(string) {
  var parentheses = '[]{}()';
  let stack = [];

  for(let i = 0; i < string.length; i++) {
    let character = string[i]
    let bracketPosition = parentheses.indexOf(character);

    if(bracketPosition === -1) {
      continue;
    }

    if(bracketPosition % 2 === 0) {
      stack.push(bracketPosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracketPosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

multiBracketValidation('[{yup))');
multiBracketValidation('[[[{star}g]]]');

module.exports = multiBracketValidation;