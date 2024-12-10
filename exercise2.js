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

/*

Challenge 3
-----------

Write a JavaScript program to concatenate two strings except their first character.

*/

const group = (str1, str2) => {return `${str1.slice(1)}${str2.slice(1)}`;}

group('fede', 'howzit');

/*

    Challenge 4
    ------------

    Given two values, Write a JavaScript program to find out which one is nearest to 100.
*/

const near100 = (v1,v2) => {
    if (v1 > v2){
        return `${v1} is nearest to 100.`;
    }
    else{
        return `${v2} is nearest to 100.`;
    }
}

near100(56,80);


/*

    Challenge 5
    ------------

    Write a JavaScript to check a given string contains 2 to 4 occurrences of a specified character.
*/

const countChar = (str, char) => {
    return str.split('').filter(ch => ch === char).length;
}

const contain = (str, char) => {
    return countChar(str, char) >= 2 && countChar(str, char) <= 4;
}

contain('hmmmm!', 'm');