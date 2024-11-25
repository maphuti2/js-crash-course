//Strings can be created using single quotes, double quotes & backticks
let singleQuote = 'Fede Dah';
let doubleQuote = "Fede Ola";
let backtick = `Hey everyone`;

// output multiple strings in one line

console.log("show 1st string: " + singleQuote + " & 2nd string: " + doubleQuote);
// template string
console.log(`Thabo: ${backtick}. 
mike: ${singleQuote}`);

// String Methods

const myString = 'Javascript is Good!';

console.log(myString.length); // displays mumber of characters
console.log(myString.toLowerCase());   // displays lower case 
console.log(myString.toUpperCase());    // displays Upper cases
console.log(myString.substring(0,10));      //displays part of characters u want from a string
console.log(myString.split(' '));        //convert string into an array

