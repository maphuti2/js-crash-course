// Arrays - are variables that hold multiple values

const greet = ['hi', 'hello', 'hey'];

console.log(greet) 
greet[1];       //displays specific value inside an array
greet.push('howzit');       //adds value inside an array at the end
console.log(greet);
greet[0] = 'Hi';
greet.pop();        // removes last array element
greet.unshift('morning');    //adds value in the beginning of an array   
console.log(greet)      //modifying array element

console.log(Array.isArray(greet));
