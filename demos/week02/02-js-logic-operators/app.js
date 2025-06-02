console.log('Hello')


// Different kinds of data types

// numbers, string, booleans 

// our variables should always be in camelCase

// lowercase first word, uppercase first letter of second word
// thisIsALongerVariable

// x = 5



// ** Logical Operators ** 

const weather = 'Sunny'
const needsSunScreen = true

// && - AND - both the left and right side expressions need to be true

weather === 'Sunny' && needsSunScreen // true 
weather === 'sunny' && needsSunScreen // false because 's' != 'S' 


// || - OR - Either the left or the right side need to be truev (for it to overall be true)

weather === 'Snowy' || needsSunScreen // true 
false || false // false

4 > 8 || 5 < 2 // false 

4 > 2 || 5 < 1 // true 


weather != 'Sunny' || !needsSunScreen

// false || false  // the whole thing is false 

// ! - flips the value; to the opposite !true -> flase !false -> true
// != - check if two values are different (opposite to =='s)



10 < 10 && 9 != 0 || 5 === 5 && !5

false && true || true && false

false || false 

false 



const result = 10 < 10 && 9 != 0 || 5 == 5 && 'Sam' 

false && true || true && 'Sam'

false || 'Sam' // 'Sam'

let x = undefined;


// null means - this doesn't have a value 
let y = null 

// const userData = null 


console.log(result)