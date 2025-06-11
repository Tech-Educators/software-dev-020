const colors = {
    red: 202,
    blue: 243,
    green: 91
}

console.log(colors)

// 1. I have to turn this into JSON

// JavaScript Object Notation
const stringifiedColoured = JSON.stringify(colors)
console.log(stringifiedColoured)


// 2. Store it in local storage
// Make sure to store the stringified version of what you want to save
localStorage.setItem('colors', stringifiedColoured)


// 3. I'd like to get it back from local storage

const coloursFromLocalStorage = localStorage.getItem('colors')
console.log(coloursFromLocalStorage)

// 4. turn it back into an object

const coloursParsed = JSON.parse(coloursFromLocalStorage)

console.log(coloursParsed)


// stringify, setitem, getItem, parse