const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.textContent = output;
    }, 3000);
}

getPosts();