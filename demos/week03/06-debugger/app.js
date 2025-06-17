console.log('Testing, testing')


const samsFavNumber = 42;


function countToTen() {
    // debugger;
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}

countToTen()

function add(a, b) {
    // debugger;
    let sum = a + b
    console.log(sum)
}

add(400,2)


function countDown() {
    let counter = 1

    // debugger;
    while (counter < 100) {
        console.log(counter)
        counter ++
         // stop each loop and good to play arund with stepover vs resume.
    }
}

countDown()

console.log('What is the value??');
