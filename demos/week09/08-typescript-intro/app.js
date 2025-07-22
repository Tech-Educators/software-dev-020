"use strict";
// file extension -> .ts or .tsx
Object.defineProperty(exports, "__esModule", { value: true });
// basic syntax : datatype
// 'sam':string
var myName = 'Sam';
var myAge = 26;
// typescript will interprite what the data type is based on what you assign it
var myDog = 'Darcy';
// myDog = 42 // causes an error - typesciprt has figured out that myDog should be a string
// What if I want a variable to be both a number or a string?
var myPhoneNumber = 2340000001;
var isCool = true;
// arrays 
// accept an array of strings or numberss
var myFavThings = ['CS2', 'Running', 'Reading', 3];
var myOtherFavThigns = ['Foo', 'Bar', 42];
// typing objects
var myJob = {
    company: 'Tech Educators',
    role: 'Instructor',
    isFun: true,
    //additionalPorperty: 'foo' // we cannot add 'additionalPropery' as it's not specified in our type
};
var SD20Info = {
    name: 'SD20',
    numberOfPeople: 8,
    isCurrentlyRunning: false,
    cohortNames: ['Connor', 'Sam']
};
var allCourses = [
    {
        name: 'SD20',
        numberOfPeople: 2,
        isCurrentlyRunning: true,
        cohortNames: ['Foo', 'Bar']
    },
    {
        name: 'DI900',
        numberOfPeople: 900,
        isCurrentlyRunning: false,
    }
];
var myGardenTree = {
    treeVarient: "oak",
    evergreen: false,
};
// typing functions
// we can type parameters inside the brackets
// the :string outside types what the function should return
function sum(a, b) {
    return a + b;
}
sum(2, 1);
