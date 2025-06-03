console.log('running')

let myName = 'Sam'

// GLOBAL VARIABlES - Any varaiables that are declared outside code blocks 

// LOCAL VARIABLES - Any varaibles defined inside codeblocks - we can only use them inside that code block

// CODE BLOCK - curly brackets

if (true ) {
    // scoped inside these curly brackets
}
function funcName() {
    // variabled declared in these curly brackets can only be used within the curly brackets.
}


function hasManyVariables() {
    // the variabled defined inside the function can only be used inside the function
    const myCity = 'Liverpool'
    const myDog = 'Darcy'
    const myHair = 'Brown'

    console.log(`My name is ${myName}, My city is ${myCity}, I have ${myHair} hair, and a dog called ${myDog}`)

    // allows us to ship a value out to the global scope.
    return myCity
}


console.log(hasManyVariables())
// console.log(myDog) // causes an error because 'myDog' was defined inside a function, and the 'global scope' doesn't know what it is.