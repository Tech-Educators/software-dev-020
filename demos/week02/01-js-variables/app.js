console.log('Hello, World!') // string
console.log(5)
console.log(5 + 5) // numbers

// Let's create a variable called myName with stores the value 'Sam'

const myName = 'Samantha'

console.log(myName)
console.log(myName)
console.log('Sam')
console.log('Sam')
console.log('Sam')


// I can refer to that value by using the variable name whereever I want in my codebase.


// Datatypes

// Strings

let string1 = "Sam"
let string2 = 'This is a string :) ! er3423423*** ()) weqwe |``~'
let string3 = `This is a string too, with backticks`
let myFavNumber = '42'


// Number
let number1 = 1
let number2 = 452342342342
let number3 = -3.1
let year = 2025


// Booleans
let coolClass = true
let connorBestTA = false

let userLoggedIn = false


let a = 1
let b = 2
let c = 3

// ab
// 3
let sum = a + b // 3

let sub = c - a // 2

let division = c / b // 1.5

let multiplication = c * b // 6
// BIDMAS works aswell
let example = (a + 2) - c



// We can also compare values

let maybeTrue = a < 1 // false
let lessThanOrEqualTo = a <= 1
console.log(maybeTrue)

let maybeFalse = b > 1 // true
let greaterThanOrEqualTO = b >= 1

let maybeTheSame = a === 5
console.log(maybeTheSame)

// understand the difference between ='s and =='s and ==='s

// = 's assignment (making a value equal)
// =='s comparision (are to *values*) the same
// ==='s comparison (are the values and the datatype the same)


let example1 = 1 === '1' // false
let example2 = 1 == '1' // true

// concatination! 


let myFirstName = `Sam`
let mySecondName = 'Louloudis'

const concatinationExample = myFirstName + ' ' + mySecondName
// Template literals
const theOtherWay = `${myFirstName} ${mySecondName}`
console.log(theOtherWay)


// typeof allows us the check the datatype of our variables

// strings, numbers and booleans

let coolNumber = 43
console.log(typeof coolNumber) // number


// difference between using const and let when declaring variables

let myAge = 26;
console.log(myAge);
myAge = 27 // once I've created the varaible I can change it. I don't need to use 'let' again, because it's already been created.
console.log(myAge);


// const should be used for varaible we won't be changing 
const myPlanet = 'Earth'
console.log(myPlanet)
myPlanet = 'Mars' // we get a big error for doing this! We're not allowed to change the value of myPlanet
console.log(myPlanet)

console.log('After the error')