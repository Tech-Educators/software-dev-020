// call back another function given to a function as an argument


function invokesOtherFunctions(theFunctionToInvoke) {
    theFunctionToInvoke()   
}

function sayHelloToSam() {
    console.log('Hello Sam')
}

invokesOtherFunctions(sayHelloToSam)

invokesOtherFunctions(function() { 
    console.log(5 + 5)
})
// it's the same as doing below- just passing a function instead of a string or number
// invokesOtherFunctions('a')
// invokesOtherFunctions(23)



// This is a more complex exmaple 

function invokesOtherFunctions(theFunctionToInvoke, args) {
    theFunctionToInvoke(args)   
}

function sayHelloToSam() {
    console.log('Hello Sam')
}

invokesOtherFunctions(sayHelloToSam)

invokesOtherFunctions(function(number) { 
    console.log(number + 5)
}, 10)


// Arrow functions

// function declartation

function sum() {

}

// invoke

sum()

// arrow functions

const subtract = () => {
    // console.log('hello!')
}

subtract()

const subtract2 = function() {

}

subtract2()


let array = [1,2,3,4]

array.forEach(function(item) {console.log(item)})

array.forEach((item) => {console.log(item)})

array.forEach(item => console.log(item))