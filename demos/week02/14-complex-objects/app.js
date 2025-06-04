

const myBookInfo = {
    name: 'Sams Book',
    yearReleased: 2001,
    authorInfo: {
        name: 'Sam',
        age: 26,
        goodWriter: false
    },
    genres: ['Mystery', 'Horror', 'Technical', 'Callbacks']
}

// How do I get the name of the book 
myBookInfo.name

// How to get name of the author?
myBookInfo.authorInfo.name // Sam

myBookInfo.genres[3] // Callbacks

// lets loop through the genres array and print each of the genres to the console. 


for (const genre of myBookInfo.genres) {
    console.log(genre)
}

for (let i = 0; i < myBookInfo.genres.length; i++) {
    console.log(myBookInfo.genres[i])
}

myBookInfo.genres.forEach(function(book) {
    console.log(book)
})