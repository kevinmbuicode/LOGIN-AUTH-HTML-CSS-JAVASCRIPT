const Posts = [
    {title: 'Post one', body: "This is post one"},
    {title: 'Post two', body: "This is post two"},
]

function getPosts() {
    setTimeout(()=> {
        let output = '';
        Posts.forEach((post, index)=> {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
};

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Posts.push(post)
            let error = false;

            if(!error){
                resolve()
            } else {
                reject("Something went wrong")
            }
        }, 2000)
    })
}

// Async/Await
// async function init() {
//     await createPost({title: "Post three", body: "This is post three"})

//     getPosts();
// }
// init()

//Async/Await/with Fetch
async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("Data is ", data)
}

fetchUsers()
