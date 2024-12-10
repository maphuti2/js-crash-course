/*
JavaScript Exercise 

Challenge 1
------------

write a JavaScript program to check two numbers and return if one of the number is 100 or if the summ of the two numbers is 100.
*/

const isHundred = (a,b) => {
    if (a === 100 || b === 100 || (a + b) === 100){
        return `100 is reached!`;
    }else{
        return `either a or b is not equal to 100 even when combined!`
    }
}

isHundred(12,82);


/*
    Challenge 2
    ------------

    Write a JavaScript programm to get the extension of a filename

*/

const extension = (file) => {
    return file.splice(file.lastIndexOf('.'));
}

extension('k.i.pdf');


/*
Challenge 3
-----------  

Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

*/

const nextLetters = (name) => {
    let result = '';

    for (let a =0; a < name.length; a++){
        let nextL = String.fromCharCode(name.charCodeAt(a)+1);
        result += nextL;
    }

    return result;
}

nextLetters('abc');

// Simple but more nerdy aproach

const nextChar = (str) => {
    return str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}

nextChar('ab');

//********************************************************** */

/* 
    Challenge 4
    ------------

    Write a JavaScript program to get the current date.
    Expected Output :
    mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy or dd/mm/yyyy

*/

const currentDate = () => {
    let whichDay = new Date();

    const day = whichDay.getDate();
    const month = whichDay.getMonth();
    const year = whichDay.getFullYear();

    return `${day}-${month}-${year}`;
}
currentDate();