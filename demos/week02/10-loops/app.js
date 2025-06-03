// LOOPS
// while
let counter = 0;

while (counter < 10) {
  counter++; // shorthand for adding 1 to a number
  console.log("while", counter);
}
// while loops are basically if statements that keep checking until they get false

// for
// declare a variable, condition, after thought
for (let i = 0; i < 10; i++) {
  console.log("for", i);
}
// every for follows these steps:
// 1. declare i
// 2. check condition
// 3. run code block
// 4. increment i
// 5. back to 2

// for loops with arrays
let friends = ["Sam", "Connor", "Tim", "Bertie", "Jez"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

// do while
let doCounter = 10;
do {
  doCounter++;
  console.log("do while", doCounter);
} while (doCounter < 10);

// for of
for (const friend of friends) {
  console.log("for of", friend);
}
