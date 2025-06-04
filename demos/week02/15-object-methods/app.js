/* A method is a function that is a property of an object */


console.log()


const bird = {
    color: 'Brown',
    wingspan: 24,
    fly : function (location) {
        console.log(`The bird flaps its wings and flies  to ${location}`)
    },
    squawk: function() {
        console.log(`The bird squawks angrily`)
    },
    getWingspan: function() {
        console.log(this)
        return this.wingspan
    }
}


bird.color // brown

bird.fly('London')
bird.fly('Singapore')

bird.squawk()


console.log(bird.getWingspan())



function sum(a, b) {
    console.log(a + b)
}


sum(5, 1)
sum(324, 243)