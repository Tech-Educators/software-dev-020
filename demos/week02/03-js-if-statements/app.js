console.log('Is this working??!')

// an if statment has sytax like this 

// if (someconditio is true!!) {
//     // run some code
// }


// if the condition is true, it runs whatever is inside the {}'s 
if (10 < 20) {
    console.log('This runs!')
}


// if the condition is false - like below - it wont run the console.log 
if (12 < 10) {
    console.log(`This doesn't run`)
}

console.log('some other code')

const number1 = 0
const number2 = 1
const number3 = 2

// == vs === 
// == -> checks value
// === -> checks value and data type (number,string,boolen)

if (number1 === 0) {
    console.log(`Yeah, seems right`) // will log
}

if (number2 === '1') {
    console.log(`JS is cool!`) // will not log, because the number 1 and the string 1 are not the same.
}

if (number3 != 2) {
    console.log('My brain hurts') // number3 is equal to 2, so the statement is false and the if statement doesn't fire. 
}

// using prompt to ask the user a question and store their answer in the 'time' variable
let time = prompt(`What is the hour (0 -23)?`)

// changes based on what the user input
console.log(time)

// even if we fufil multiple conditions, our if statment will only execute the first one that matches.

if (time < 12) {
    console.log(`Go back to bed!`)
} else if (time < 13) {
    console.log(`It's lunch time!`)
} else if (time < 22) {
    console.log('Brush your teeth')
} else {
    console.log(`Go to work!`)
}

if (thestatemntinhereistrue) {
    run the code in here
}


if (whatever) {

}

if {this} [

]
