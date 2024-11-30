// Learning Classes

// Creating Class or Defining a Class

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Method
    getFullName(){
        console.log(`${this.firstName} ${this.lastName} ${this.age}yrs`);
    }
}

// Create an instance of the Person class

const person1 = new Person('Maphuti', 'Makwela', '30');
person1.getFullName();

// Class Inheritance

class Job extends Person {
    constructor(firstName, lastName, age, jobTitle){
        super(firstName,lastName,age);
        this.jobTitle = jobTitle;
    }

    employeeDetail(){
        console.log(`${this.firstName} ${this.lastName} ${this.age}yrs works as ${this.jobTitle}`);
    }
}

const employee1 = new Job('Thapelo', 'Mamo', 26, 'Software Developer');

employee1.employeeDetail();
console.log(employee1.jobTitle);

// Static Methods are self called classes

class Full_Names{
    static getFullName(firstName, lastName){
        return `${lastName} ${firstName}`;
    }
}

console.log(Full_Names.getFullName('thapelo', 'rebombo'));
