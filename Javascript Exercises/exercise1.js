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