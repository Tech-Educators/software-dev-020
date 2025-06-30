// destructuring

let myInfo = {
    age: 26,
    city: 'Liverpool',
    hobbies: ['Reading', 'Gaming', 'Flaming my teamates']
}

const myAge = myInfo.age // boring!!


// we can use something called destructuring to extract all the properties out of my object all at once
// the desctrured name needs to match to the property name in the object
let {name, year, genres} = {
    name: 'Dave the Diver',
    year: 2020,
    genres: ['Fishing', 'Diving', 'Serving']
}

console.log(genres)


function takesObject({name, year}) {
    console.log(name)
}

takesObject({name: 'Elden Ring', year: 2022})


// Array desctructuring 

const numbers = [1,2,3]

const one = numbers[0] // boring!

// goes based on order
const [apple, mango, whatever] = ['Apple', 'Mango', 'Pear']

console.log(whatever)


const bookData = [
    {
        name: 'Book1',
        rating: 5
    },
    {
        name: 'Book2',
        rating: 5
    },
    {
        name: 'Book3',
        rating: 5
    }
]


bookData.forEach(({name}) => {
    console.log(name)
})


function sayHelloAndGoodbye() {
    return ['Hello!', 'Goodbye']
}

const [greeting, farewell] = sayHelloAndGoodbye()

const [oner, two] = ['Hello', 'Goodbye']

console.log(greeting)