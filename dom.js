// Document Object Model (DOM) is a tree-like structure where each node represents a part of the document.


// DOM Selector
//Single selection
document.getElementById('my-form');
document.querySelector('name');

// Multiple selector

document.querySelectorAll('.msg');

// Accessing the element

const getElement = document.getElementById('content');
console.log(getElement);

// Creating new element

const newPara = document.createElement('p');
newPara.textContent = 'What else can I do?';

// Appending/ Adding new element

getElement.appendChild(newPara);

const b= document.querySelector('.btn');

b.style.background = 'blue';

b.addEventListener('click', () => alert('Xo Dah!'));