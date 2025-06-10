//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY 


// the photo
// when it was taken on earth time
// name of the image

// fetch my data

async function fetchData() {
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=`)
    const data = await response.json()
    // console.log(data.photos.slice(0, 10))
    const slicedImages = data.photos.slice(0,10)
    return slicedImages
}


async function createCards() {
    const images = await fetchData()
    console.log(images)

    images.forEach((image) => {
        const div = document.createElement('div')
        const dateTag = document.createElement('p')
        const roverTag = document.createElement('p')
        const imgTag = document.createElement('img')

        imgTag.src = image.img_src
        dateTag.innerText = image.earth_date
        roverTag.innerText = image.rover.name

        div.setAttribute('class', 'card')
        div.append(imgTag, dateTag, roverTag)
        // div.appendChild(imgTag)

        // div.appendChild(dateTag)
        // div.appendChild(roverTag)

        document.body.appendChild(div)


    })
    // loop through array
    // create elements
    // append to page
}

createCards()