// 1) A function declaration (preparing our spell)

function theFunctionName() {
    console.log('Hello')
}

// 2) To invoke the function (cause it to run)
theFunctionName()
theFunctionName()
theFunctionName()
theFunctionName()

// Function are powerful because once you have a set of steps you need to repeat, you have the code stored and can just reusde it.

// Arguments and Parameters

// A parameter is a like a special variable you're telling you function to accept. We don't know the value of the variable yet.
// when declaring our fucntion we add parameters
function sum(numberOne) {
    console.log(5 + numberOne)
}
// when invoking them we provide argument
sum(10)
sum(2)
sum(-13)
sum('Hello')


console.log('Hello')


function makeStringCooler(string) {
    console.log(`${string} 😎`)
}

makeStringCooler('The string I want to add')
makeStringCooler(`yeah, Im a wizard`)