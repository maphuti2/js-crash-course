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

getPost();