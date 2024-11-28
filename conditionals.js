// Conditionals statement 

// if statement

let x = 2;
if (x === 0){
    console.log("Lucky You!");
}else if (x === 5){
    console.log("It's a five!");
}
else{
    console.log("Your Wrong!");
}

// ternary operator

let carName = "BMW";

const uDrive = carName === "Kia" ? "You drive cheap car" :
               carName === "Polo" ? "You drive playboy car" :
                "Now you drive real car!";

console.log(uDrive);

