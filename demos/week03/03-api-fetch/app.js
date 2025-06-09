const img = document.getElementById('fox')


async function fetchData() {
    // we make the function async because we don't know how long it will take for the server to respond to us, and we want to keep running the rest of our code in the meantime.
    // use a function called fetch that comes with JS

    // sending a request to hte URL for the fox image
    // the await tells the program to wait for promise to be fuffilled. 

    // fufils the 'headers' of the request.
    const response = await fetch(`https://randomfox.ca/floof/`)

    // tell the browser to read the incoming data as json

    const data = await response.json() // why is this async?

    console.log(data)

    img.src = data.image
}

fetchData()