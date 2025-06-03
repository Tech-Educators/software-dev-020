console.log('running..')

// Events are actions users take on your website

// Clicking on a button or image, scrolling the page, or hovering on something

// JavaScript allows us to 'listen 'for these events

// Get the elements we watch to listen to.

const button = document.querySelector('#btn')
// const button = document.getElementById('btn') // this also works

// tell javascript to listen for the event.

// addEventListern takes two arguemnts
// the type of event you want to listen for as a string,
// the function you want to run when that event happens.
// don't add parentheis ()'s to the function you're telling it to run.
button.addEventListener('click', handleClick)


function handleClick() {
    console.log('You clicked on the button!')
}


const secondBtn = document.getElementById('secondBtn')

secondBtn.addEventListener('click', function() {
    console.log('I asked you not to click the button')
})


// lets work with the event object

// get the elments

const buttonEvent = document.getElementById('logsEvent')

buttonEvent.addEventListener('click', handleEventAndLog)


// we accept a parameter in the function.
function handleEventAndLog(event) {
    console.log(event)
}

