// Code to valid if the user entered data

const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const button = document.querySelector('.btn');
const message = document.querySelector('.msg');
const ul = document.querySelector('#users')

button.addEventListener('click', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(name.value === "" || email.value === ""){
        message.style.background = 'red';
        message.textContent = "Please fill in your name and email";
        setTimeout(() => message.remove(), 3000)
    }else{
        const user = document.createElement('li');
        user.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
        alert("added");
        ul.appendChild(user);  // Adding to html page


        // Clearing Text
        name.value = '';
        email.value = '';
    }

    
}