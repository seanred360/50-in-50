const sounds = ['A Hole Is Calling', 'An Idiot Is Calling', 'FF Victory', 'Fortnite Theme', 'Halo CE Theme', 'MGS Call', 'Pokemon Gym Battle', 'Text Message Man', 'Your Phone is Ringing', 'Mario Bros', 'Sweet Text', 'Whistle']
const search = document.querySelector('.search')
const searchBtn = document.querySelector('.searchBtn')
const input = document.querySelector('.input')

sounds.forEach(sound => {
    const btn = document.createElement('button')
    const icon = document.createElement('i')
    const txt = document.createElement('span')

    btn.classList.add('btn')
    icon.classList.add('far')
    icon.classList.add('fa-play-circle')

    btn.appendChild(icon)
    btn.appendChild(txt)

    txt.innerText = sound

    const bgNumber = getRandomNumber(25, 1)
    const redRandom = getRandomNumber(255, 0)
    const greenRandom = getRandomNumber(255, 0)
    const blueRandom = getRandomNumber(255, 0)

    btn.style.backgroundImage = `url('resources/backgrounds/bg${bgNumber}.png'), linear-gradient(to left bottom, rgb(${redRandom}, ${greenRandom}, ${blueRandom}), rgb(${255}, ${greenRandom -10}, ${blueRandom - 10}))`
  

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currenTime = 0
    })
}

function getRandomNumber(max, min) {
    //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    return Math.round(Math.random() * (max - min) + min)
}

searchBtn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})