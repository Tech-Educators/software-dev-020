// 1. get the element in my html

const form = document.getElementById('loginForm')

form.addEventListener('submit', handleSubmit)


function handleSubmit(event) {
    event.preventDefault()

    // console.dir(event)

    console.log(event.target.username.value)
    console.log(event.target.password.value)
}


// Another method of wrting long forms


const moreComplex = document.getElementById('morecomplexForm')

moreComplex.addEventListener("submit", function(event) {
    // stops the default 'refresh' behaviour of the from
    event.preventDefault()

    // create this conventiant thing that is hard to work with
    const data = new FormData(moreComplex)
    
    
    // turn it into a normal object that's easier to work with
    const userData = Object.fromEntries(data)
    console.log(userData)
})