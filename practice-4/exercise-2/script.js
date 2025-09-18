function getUser(id, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => callback(error));
}

function getUserPosts(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => callback(error));
}

function getPostComments(postId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => callback(error));
}

function loadUserFeed(userId, callback) {
    getUser(userId, (user) => {
        getUserPosts(userId, (posts) => {
            getPostComments(posts[0].id, (firstPostComments) => {
                callback({ user, posts, firstPostComments });
            });
        });
    });
}

loadUserFeed(1, (result) => {
    console.log(result);
});