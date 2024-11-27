// Creating Object 
const cars = {name: 'Kia',
    model: 'KZ-2036',
    brand: 12,
    color: ['yellow', 'red', 'black', 'white'],
    availability: {
        model: 'ka-2002',
        city: 'polokwane',
    },
}

console.log(cars.model, cars.color[1], cars.availability.city);        // Displaying Object

const {name, model, color, availability: {city, } } = cars;     // constructor format

console.log(city, color[2]);

cars.country = 'South Africa';
console.log(cars)

// Working with array that containers objects

const chaos = [{
    id: 1,
    task: "clean Dishes",
    isFinished: false
},
{id: 2,
    task: "Clean House",
    isFinished: false,
},
{id: 3,
    task: "make Coffee",
    isFinished: true,
},
{id: 4,
    task: "Practice coding",
    isFinished: false,
}];

console.log(chaos[3].task);

// JSON from Object

const chaosJson = JSON.stringify(chaos);
console.log(chaosJson);