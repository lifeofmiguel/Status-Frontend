// function fetchPosts(){
// fetch("http://localhost:3000/posts")
//     .then(r => r.json())
//     .then(data => console.log(data))
//     .catch(err => console.warn(err))
// }

console.log("Hello World <3")

const postForm = document.getElementById("post-form")
const postInput = document.getElementById("post-input")
const postList = document.getElementById("post-list")

postForm.addEventListener("submit", submitPost)

function submitPost(){
    event.preventDefault()
    
}

function renderPost(){
    // console.log(postInput.value)
    const li = document.createElement('li')

    const p = document.createElement('p')
    p.innerText = postInput.value

    const commentForm = document.createElement('form')
    commentForm.innerHTML += '<input type="text" id="comment-input"><input type="submit">'
    commentForm.addEventListener("submit", submitComment)

    const commentList = document.createElement('ul')

    li.append(p, commentForm, commentList)

    postList.appendChild(li)

    postForm.reset()
}

