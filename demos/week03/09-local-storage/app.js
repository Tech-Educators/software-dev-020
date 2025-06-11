// can only store about 5mb for your domain

// tokens - for validation (mostly cookies are used for these)
// local storage is only stored on your computer 

const counterDisplay = document.getElementById('counter')
const button = document.getElementById('clickMe')

// if there is something in local storage under 'count' that will become the value of the 'count' variable, otherwise we default to a value of 0'
let count = localStorage.getItem('count') || 0;
counterDisplay.innerText = count

button.addEventListener('click', () => {
    count++
    counterDisplay.innerText = count
    localStorage.setItem('count', count)
})

// only strings can be stored in local storage