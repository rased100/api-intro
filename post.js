function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}
loadPost();

function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts)
        const div = document.createElement('div');
    // const div = document.createElement('div');
    div.innerHtml = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
    postContainer.appendChild(div);
}