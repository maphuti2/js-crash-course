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

// Switch Statement

const grade = 71;
switch (true){
    case (grade>=80): console.log("A");
    break;
    
    case grade>=70 : console.log("B");
    break;
    
    case grade>=60 : console.log("C");
    break;
    
    case (grade>=50) : console.log("D");
    break;
    
    case (grade>=40) : console.log("E");
    break;
    default:
        console.log("Yah neh you should study.");
}