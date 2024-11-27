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

// for loop

for (let i = 0; i < 10; i++){       //For loop creation
    console.log(i);     
}

// While loop

let i = 0;
while (i <= 10){
    console.log(`While loop is - ${i}`);
    i++;
}

//for...of loop

for (let start of chaos){
    console.log(`Chao ${start.id} is ${start.task}`)
}

console.clear();
// forEach, map, filter and reduce

chaos.forEach( (c) => {
    console.log(c.task);
})

const map = chaos.map(function(m){
    return m.task;
});
console.log(map);


const filter = chaos.filter(function(f){
    return f.id > 2;
}).map((b) => {
    return b.task; 
})

console.log(filter);