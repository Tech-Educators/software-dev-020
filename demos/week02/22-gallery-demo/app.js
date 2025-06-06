console.log('Hello mate')


// I should use an array of image objects {src: 'blah blah', alt: 'this is alt text'}

// 1. get thumbnail container

const thumbnailContainer = document.getElementById('thumbnailContainer')

const displayContainer = document.getElementById('displayContainer')

let currentImageIndex = 0

// 2. create our array of images 
let images = [
    {
        src: 'https://plus.unsplash.com/premium_photo-1747221638084-91a2ec203643?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A man sitting at a breakfast table petting a cat as it passes underneath the chair'
    }, {
        src: "https://i.natgeofe.com/k/9acd2bad-fb0e-43a8-935d-ec0aefc60c2f/monarch-butterfly-grass_3x2.jpg",
        alt: "A monarch butterfly on a flower"
    }, {
        src: "https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "A chihuahua not enjoying a bath, with bubbles on their head."
    }
]

function createThumbnails() {
    // I'm going to loop through all of the images and create an image tag for them.

    images.forEach(function (image, index) {
        // for each of my images, I want to create an image tag

        let imageElem = document.createElement('img')

        // setting the elemnt.src to be the same as our object.src
        imageElem.src = image.src
        imageElem.alt = image.alt

        imageElem.addEventListener('click', function() {
            createBigImage(image)

            // updating the currentImageINdex to be the same number as the currently being displayed image.
            currentImageIndex = index
        })

        thumbnailContainer.appendChild(imageElem)
    })
}

createThumbnails()



function createBigImage(imgDetails) {
    // reset the display container every time you run this function.
    displayContainer.innerHTML = ''
    const bigImage = document.createElement('img')

    bigImage.src = imgDetails.src
    bigImage.alt = imgDetails.alt

    displayContainer.appendChild(bigImage)
}


// when the user used the button or arrows keys we need to incremment / decrement the currentImageIndex by 1/-1

// We also need to consider if they run out of images - they need to be sent back to the start/end of the line of images. 