// default values for the cookies and cps

let cookieCount = 0;
let cps = 1;

// or you could get fancy - easier to work with in localstoage
let state = {
    cookiesCount: 0,
    cps: 1
}

// if the data is in localstorage, update from local storage instead of just setting it to default values

// setInterval to make the cookies go up each second

setInterval(() => {
    cookieCount += cps
    // updat the dom to show the new value of cookie count
    // save the value into local storage
}, 1000)


// game logic

// when the user clicks on the cookie, the cookieCount goes up by 1. 

// when we buy an upgrade, the cookieCount goes down. CPS goes up 
// Need to check if the user can afford to buy something . 


// ==== fetching upgrades

// fetch our data from the api 

// link: 'https://cookie-upgrade-api.vercel.app/api/upgrades'
// maybe we could think about using loops to loop over the array elements to produce each of our tags 
// create element
// dealing with the purcahse buttons?
// change text
// append to dom
// upgrades should be on website.


// For purchasing elements - >
// we could have a function for each upgrades
// or a generic function that works for all upgrades

// specific
function fivePlusFive() {
    return 5 + 5
}

// generic
function sum(a, b) {
    return a + b
}