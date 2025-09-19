function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
    });
    
}

function getUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
    });
}

function getPostComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
    });
}

async function loadUserFeed(userId) {
    try {
        const user = await getUser(userId);
        const posts = await getUserPosts(userId);
        const firstPostComments = await getPostComments(posts[0].id);
        return { user, posts, firstPostComments };
    } catch (error) {
        console.error('Error:', error);
    }
}

loadUserFeed(1)
    .then(result => console.log(result))
    .catch(err => console.error(err));
