console.log('We are checking...')

// Let's modify an element

// 1. First, I need to retrive the DOM Node( elemetn) I want to work with

let myPTag = document.getElementById('pTag')

// let myPTag = document.querySelector('p')

console.dir(myPTag);

// 2. I can modify the text of my pTag
myPTag.innerText = "This was changed with JavaScript"


// let modify the whole body

document.body.style.backgroundColor = 'tomato'


// Let's create a new HTML element

// 1. Create the element

const myHeader = document.createElement('h1')

// 2. adjust the text
myHeader.innerText = 'This heading was made in JavaScript'

// 3. Add to the html 

document.body.appendChild(myHeader)




const userName = prompt('What is your name?')

let userGreeting = document.createElement('marquee')

if (userName === 'Sam') {
    // do something
    userGreeting.innerText = 'Welcome to the website Sam!!!!!!!!!!!!!!' 
} else if (userName === 'Connor') {
    userGreeting.innerText = 'Can you start recording?'
} else {
    userGreeting.innerText = 'How did you even find this site?'
}

document.body.appendChild(userGreeting)