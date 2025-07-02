// 1. how do I get the data out of my form?
const form = document.getElementById('form')


// the second argument we give to addEventListner (the function - always get a parameter representing the event object.) The event object is a collection of data about the event that just happened. 
form.addEventListener('submit', (event) => {
  event.preventDefault()

  // how to get data out of form?
  const formData = new FormData(form)
  // turn it into a normal js object
  const userBookInput = Object.fromEntries(formData)

  const JSONDATA = JSON.stringify(userBookInput)

  // fetch takes 1 or more arguments
  // 1st - the URL to send the request to
  // 2nd - an object with a list of options in 
  fetch(`http://localhost:4040/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSONDATA
  })
})

// 2. send the data (using fetch) to my server