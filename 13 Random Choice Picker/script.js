const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const hideable = document.getElementById('hideable')
const ball = document.getElementById('ball')

textarea.focus() // automatically puts cursor here

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value) // use value to target the text

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
            hideable.style.display = 'none'
            ball.style.display = 'block';
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const iterations = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            removeHighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100);
    }, iterations * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function removeHighlightTag(tag) {
    tag.classList.remove('highlight')
}