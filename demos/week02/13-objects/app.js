
let myInfo = {
    myCity: 'Liverpool',
    hairLong: true,
    job: 'Instructor',
    favouriteLanguages: ['JS', 'Go', 'Python'],
    myPets: {
        name: 'Darcy',
        color: 'Brown'
    }
}

// to access properties on an object we use . notation 

console.log()
// document.getElementsByClassName()

myInfo.myCity // Liverpool
myInfo.hairLong // true
myInfo.pets // {name: 'Daryc', color: 'brown'}


// adding a property after creation

const book = {
    author: 'Robert McFarlane',
    title: 'Underland',
    yearReleased: 2021,
    blurb: "This is a great book!"
}
console.log(book)
book.reviews = '5/5'

console.log(book)