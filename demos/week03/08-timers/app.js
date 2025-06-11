// Timers let our code interact with time
// There are two types of timers that are both methods of the window DOM object (just pretend I remembered to say this in the demo)
// Both timers take two arguments: a callback function and a delay in milliseconds

// One type that lets us trigger a function ONCE when a countdown finishes

function sayHello() {
  console.log("Hello world!");
}

setTimeout(sayHello, 1000);

setTimeout(() => {
  console.log("Hello world!");
}, 1000);

// The other triggers a function repeatedly after a certain amount of time passes between each time

setInterval(sayHello, 1000);

const myInterval = setInterval(() => {
  console.log("This is also a function!");
}, 1000);

// To clear our timers we need to assign them to a variable then use the clearInterval or clearTimeout methods with the variable name as an argument

setTimeout(() => {
  clearInterval(myInterval);
}, 5000);

const boomTimer = setTimeout(() => {
  console.log("BOOM");
}, 10000);

setTimeout(() => {
  clearTimeout(boomTimer);
  console.log("Bomb defused");
}, 5000);
