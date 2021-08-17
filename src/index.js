// fetch("http://localhost:3000/posts")
// .then(r => r.json())
// .then(data => console.log(data))

// console.log("Hello World <3")

const postForm = document.getElementById("post-form")
const postInput = document.getElementById("post-input")

postForm.addEventListener("submit", submitPost)

function submitPost(){
    event.preventDefault()
    console.log(postInput.value)
}