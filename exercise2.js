/*
    Challenge 1

    Write a JavaScript to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. the string length must be 3 or more, if not the original string is returned.

*/

const string = (char) => {
    if(char.length <= 3){
        return char;
    }
    else{
        let first3 = char.substr(0, 3);
        let last3 = char.substr(-3);

        return `${first3}${last3}`;
    }
}
string("thapelo");


/*

    Challenge 2
    ------------

    Write a JavaScript program to extract the first half of a string of even length.

*/

const halfString = (str) => {
    if (str.length % 2 === 0){
        return str.slice(0, str.length/2);
    }
}

halfString("hope");