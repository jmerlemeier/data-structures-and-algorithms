'use strict';

//Use stacks and queues

//input string
//outpuf boolean 
//depending on symetry 
//regex to get rid of non bracket characters
//use stack
//count opening and see if same as closing

function validateBrackets(str) {

  //filter method with arrays. 
  //make array with each item in string is a character inarray
  //filter returning an array of things that are true of callback
  //.includes --> is the little inthe bigger?
  const bracketsStr = str
    .split('')
    .filter(bracket => '{}[]()'.includes(bracket));

  const stack = [];

  //make key value pairs
  const pair = {
    ')' : '(',
    '}' : '{',
    ']' : '['
  }

  //if we see any opening bracket, lets add to our stack:
  for(let eachCharacter of bracketsStr){
    if('({['.includes(eachCharacter)) {
      stack.push(eachCharacter)
    }
    //if we see a closing bracket, lets remove from our stack:
    else {
      const popped = stack.pop();
      if (popped !== pair[eachCharacter]) {
        return false;
      }
    }
  } 
return stack.length === 0; 
}
    


// =========== EXECUTABLE CODE =============
console.log(validateBrackets('{(})'));