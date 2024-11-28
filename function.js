// learning Functions

function greet(){
    console.log("hi, people!")
}

greet();

// Arrow function

const addNum = (num1, num2) =>{
    return num1 + num2;
}

console.log(addNum(7,1));

//constructor function

function Person(firstName, lastName, born){
    this.firstName = firstName;
    this.lastName = lastName;
    this.born = new Date(born);
}

// Instantiate Object

const person1 = new Person('thapelo', 'mami', '12-12-2000');
const person2 = new Person('maphuti', 'kgoko', '04-20-2004');

console.log(person1.lastName);
console.log(person2.born.getDay());


// prototype 

Person.prototype.getFullName = function(){return `${this.firstName} ${this.lastName}`;} 


console.log(person1.getFullName());