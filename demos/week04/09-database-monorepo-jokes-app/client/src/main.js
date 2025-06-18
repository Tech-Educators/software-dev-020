const app = document.getElementById('app')

// write a function to fetch all jokes 

async function fetchJokes() {
  const res = await fetch(`http://localhost:4242/jokes`)
  const jokes = await res.json()
  return jokes
}

// display jokes
async function displayJokes() {
  const jokes = await fetchJokes()

  jokes.forEach((singleJoke) => {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const pTag = document.createElement('p')

    div.append(h3, pTag)

    // set the content
    h3.innerText = singleJoke.joke
    pTag.innerText = singleJoke.punchline

    app.appendChild(div)
  })
}

displayJokes()