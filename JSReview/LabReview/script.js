
function fetchUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(fetched => {
            return fetched.json();
        })
        // .then((parsedUser) => {
        //     console.log(parsedUser);
        //})
        .catch((e) => {
            console.log("User not found");
        });
}

//fetchUser(1);



function fetchPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(fetched => {
            return fetched.json();
        })
        // .then((parsedPosts) => {
        //     console.log(parsedPosts);
        // })
        .catch((e) => {
            console.log("User not found");
        });
}

//console.log(fetchPost(1));




//chaining the promises
function fetchUserAndPosts(id) {
    return fetchUser(id)
        .then(User => {
            console.log(`User Name: ${User.name}`);
            console.log(`User Email: ${User.email}`);
            return fetchPost(User.id);
        }).then(posts => {
            console.log("Posts:");
            for (let post of posts) {
                console.log(`${post.id} ${post.title}`);
            }

        });
}




fetchUserAndPosts(1);
