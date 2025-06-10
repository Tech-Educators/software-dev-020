console.log('Hello World')


setTimeout(() => {
    console.log('Timeout run')
}, 0)


async function fetchData() {
    console.log(`Before fetch`)
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/1185')
    const data = await response.json()
    console.log(`After fetch`)
}

fetchData()

console.log('Goodbye world')