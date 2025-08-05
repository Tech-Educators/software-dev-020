// in functional programming, we've been using objects mostly to store data

// functional programming - using functions; trying to write pure functions 
// pure function - given the same input, returns the same output, and doesn't have any side effect. 
// A side effect: console.log, document.innerText ect. Generally, if a function doesn't return anything its probably not pure.
const obj = {
    foo: 'Sam',
    bar: 'Louloudis'
}

// in object oriented programming, objects are our main building blocks.
// to build an object, we'll use a class.

// a class will have a constructor function - this function created new instances (objs) of the class and then any methods we want all biscuits to have.
class Biscuit {
    // we're creating a template we want our produced objects to follow
    // the constructor function runs when we use the new keyworkd
    // constructor functions create objects
    constructor(name, crunchiness, flavour) {
        // 'this' refers to the object currently being made by the constructor.
        this.name = name,
        this.crunchiness = crunchiness,
        this.flavour = flavour
    }
    voiceline() {
        console.log(`The ${this.name} is my favourite one! It has a crunchiness level of ${this.crunchiness} and the flavour is ${this.flavour}. How great!`)
    }
}

new FormData()
new Error()
new URLSearchParams()

const custardCream = new Biscuit('custard cream', 6, "vanilla")
const digestive = new Biscuit('Digestive', 5, 'digestives')
const hobnobs = new Biscuit('Hob Nobs', 5, 'Oaty')

custardCream.voiceline()
digestive.voiceline()
hobnobs.voiceline()
console.log(custardCream)


class Cookie extends Biscuit {
    constructor(name, crunchiness, flavour, price) {
        // super says : go the the ancestor class and call it's constructor (in this case, Biscuit)
        super(name, crunchiness, flavour)
        this.price = price
    }
    slogan() {
        console.log(`Id click on this ${this.name} cookie!`)
    }

    // voiceline() {
    //     console.log('Will this overwrite?')
    // }
}

const chocolateChip = new Cookie("Chocolate Chip", 7, "Chocolate Chip", 400)
// we can call voiceline on chocolate chip because it 'inhertited' the properties of the Biscuit class. 
chocolateChip.voiceline()
chocolateChip.slogan()
console.log(chocolateChip)


// lets try to give a biscuit one argument and see what happens
const missingDetails = new Biscuit('Name')

console.log(missingDetails)