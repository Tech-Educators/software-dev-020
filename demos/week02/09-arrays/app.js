// data types we are used to
let myString = "string";
let myNumber = 9;
let myBoolean = true;

// arrays
let myArray = []; // square brackets

let colours = ["red", "green", "blue"];

console.log(colours); // see the entire array in the console
console.log(colours[1]); // see an individual item from the array
console.log(colours[3]); // undefined - we can't access an item that doesn't exist

// an array method is a function that belongs to an array (below is ALL array methods)

// adding items to the end of an array
colours.push("orange");
console.log(colours);

// removing items from the end of an array
colours.pop();
console.log(colours);

// adding an item to the start of an array
colours.unshift("purple");
console.log(colours);

// removing an item from the start on an array
colours.shift();
console.log(colours);

// adding an item at a specific index
colours.splice(1, 0, "brown");
console.log(colours);

// splice but funkier? Yes.
// splice(indexStartPoint, numberOfItemsToDelete, itemToAdd)
colours.splice(1, 3, "teal");
console.log(colours); // ["red", "teal"]

// extra final thing for fun!
let count = colours.length;
console.log(count); // 2
