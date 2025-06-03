console.log('Hi')


// function declaration

function myFunction() {
    const number = 10
    console.log(number + 12)
}

// invoking my function

myFunction()


// arguments and parameters

// given my function two parameters of 'number1' and 'number2' 
function sum(number1, number2) {
    // console.log(number1)
    // console.log(number2)
    // console.log(number1 + number2)
    return number1 + number2
}

// invoke my function
// we need to provide arguments (tell number1 , number2 what their values are)
sum(10, 2)

sum(5, 2)
sum(34234234, 12312312)
const myImportantNumber = sum(-1323131, 123)


console.log(myImportantNumber)


function returns2() {
    const bestNumber = 2
    return bestNumber
}

const moreImportantNumber = returns2()


// create an element

// document.getElementById
// document.querySelector

const myh2 = document.createElement('h2')

// change the inner text

myh2.innerText = sayHelloToUser('Sam') 
myh2.style.backgroundColor = 'red'
document.body.appendChild(myh2)


function sayHelloToUser(username) {
    // get all user data
    return `Morning, ${username}`
}