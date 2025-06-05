// 1. get all the buttons

const audio = document.getElementById('rain')
const timeDisplay = document.getElementById('timeDisplay')

const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')
const stopButton = document.getElementById('stop')
const skipFor = document.getElementById('skipForward')
const skipBackward = document.getElementById('skipBackward')


// 2 I want to know when the usr clicks the play butotn

playButton.addEventListener('click', function() {
    console.dir(audio)
    audio.play()
    displayTime()
})


pauseButton.addEventListener('click', function() {
    audio.pause()
})

stopButton.addEventListener('click', function() {
    audio.pause()
    audio.currentTime = 0;
})

skipFor.addEventListener('click', function() {
    audio.currentTime += 10

    // above is shorthand for the below
    // audio.currentTime = audio.currentTime + 10
})

skipBackward.addEventListener('click', function() {
    audio.currentTime -= 10
})

audio.addEventListener('loadedmetadata', function() {
    timeDisplay.innerText = `${audio.currentTime} / ${audio.duration}`
})


function displayTime() {
    // set interval is a function - we give it two arguments
    // the function to run
    // how often to run it (in miliseconds)
    const interval = setInterval(function() {
        timeDisplay.innerText = `${Math.round(audio.currentTime)} / ${Math.round(audio.duration)}`
    }, 1000)
    if (audio.currentTime > audio.duration) {
        clearInterval(interval)
    }
}