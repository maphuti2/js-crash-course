const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 2000);
}

// promise function

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            posts.push(post);
            const err = true;

            if (!err){
                resolve();
            }else{
                reject('Error, Something went wrong');
            }
        }, 3000)
    });
}

// printing data from createpost / promise function

createPost({title: 'Post Three', body: 'This is post three'}).then(getPost).catch(err => console.error(err));