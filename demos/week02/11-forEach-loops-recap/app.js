


// for loop 

for (let counter = 0; counter < 5; counter++) {
    console.log(counter)
}


// for of
let fruits = ['Apple', 'Melon', 'Pear', 'Kiwi', 'Mango']

for (const fruit of fruits) {
    console.log(fruit)
}


let places = ['London', 'Barcelona', 'Paris', 'Tokyo', 'Cape Town']

// for each is something we call an array method

// we give it a function to run as it's arguments

// the function we give it gets two parameters
// the item
// the index

places.forEach(function(place, index) {
    console.log(place, index)
})

