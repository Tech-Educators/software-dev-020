// file extension -> .ts or .tsx

// basic syntax : datatype
// 'sam':string

const myName: string = 'Sam'
const myAge: number = 26

// typescript will interprite what the data type is based on what you assign it
let myDog = 'Darcy'
// myDog = 42 // causes an error - typesciprt has figured out that myDog should be a string

// What if I want a variable to be both a number or a string?
const myPhoneNumber: string | number = 2340000001

const isCool: boolean = true;


// arrays 
// accept an array of strings or numberss
const myFavThings: (string | number)[] = ['CS2', 'Running', 'Reading', 3]
const myOtherFavThigns: Array<string | number> = ['Foo', 'Bar', 42]

// typing objects
const myJob: {company: string, role: string, isFun: boolean}= {
    company: 'Tech Educators',
    role: 'Instructor',
    isFun: true,
    //additionalPorperty: 'foo' // we cannot add 'additionalPropery' as it's not specified in our type
}


export type CourseType = {
    name: string,
    numberOfPeople: number,
    isCurrentlyRunning: boolean,
    // some thing of type CourseType may not ha ve a cohortNames proeprty, thats fine
    cohortNames?: string[]
}

const SD20Info: CourseType = {
    name: 'SD20',
    numberOfPeople: 8,
    isCurrentlyRunning: false,
    cohortNames: ['Connor', 'Sam']
}

const allCourses: CourseType[] = [
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
]


// another type

type TreeType = {
    treeVarient: "fir" | "oak" | "cherry" | "maple",
    evergreen: boolean,
    imgUrl?: string
}

const myGardenTree: TreeType = {
    treeVarient: "oak",
    evergreen: false,
}


// typing functions
// we can type parameters inside the brackets
// the :string outside types what the function should return
function sum(a: number, b:number): number{
    return a + b
}

sum(2, 1)