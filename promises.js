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


createPost({title: "Post three", body: "This is post three"}).then(getPosts).catch(err => console.log(err))
