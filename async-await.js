// Async / await

const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

// Adding post
function myPosts(){
    let output = '';
    setTimeout(() =>{
        posts.forEach((post) =>{
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = output;
    },2000);
}

// creating post

function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            posts.push(post);

            const err = false;

            if(!err){
                resolve();
            }else{
                reject('Error happened!');
            }
    
        }, 3000);
    })
    
}

// Async / Await function

async function init() {
    await createPost({title: 'post 3', body: 'This 3'});

    myPosts();
}

init();


// async / await & fetch

async function fetchUser(){
    const user = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await user.json();

    userData.forEach((u) =>{
        console.log(`${u.name} email:${u.email}`);
    });
}

fetchUser();
