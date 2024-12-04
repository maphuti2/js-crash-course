const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

// function to get post
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post , index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 2000);
}

// function that creates posts

function createPosts(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    },3000)
}

createPosts({title: 'Post Three', body: 'This is post three.'}, getPosts);
