// 1. get the form elements
const form = document.getElementById('form')


function handleSubmitBook(event) {
  // stop the page from refreshing
  event.preventDefault()
  const formData = new FormData(form)
  // turn the formData into a normal object
  const bookData = Object.fromEntries(formData)
  console.log(bookData)

  // how to get that information to my server?
  // if you use fetch with one argument, you're making a get request
  // to include a different kind of request(delete/post), give the fetch function another argument of an 'options' object.
  fetch(`http://localhost:7070/books`, {
    // method name in caps - 'im sending a post request instead of a get request'
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    // sending the actual main data - generally sent in the body.
    body: JSON.stringify(bookData)
  })
}

form.addEventListener('submit', handleSubmitBook)