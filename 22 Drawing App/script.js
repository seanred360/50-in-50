const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let size = 20
colorEl.value = 'black'
let color = colorEl.value
let moveX 
let moveY
let isPressed = false

canvas.addEventListener('click', (evnt) => {
    drawCircle(evnt.offsetX, evnt.offsetY)
})

canvas.addEventListener('mousedown', (evnt) => {
    isPressed = true;

    moveX = evnt.offsetX //returns mouse coordinates 
    moveY = evnt.offsetY //
})

canvas.addEventListener('mouseup', (evnt) => {
    isPressed = false

    moveX = undefined
    moveY = undefined
})

canvas.addEventListener('mousemove', (evnt) => {
    if(isPressed) {
        const lineX = evnt.offsetX
        const lineY = evnt.offsetY

        drawCircle(moveX, moveY) //draw circle at line start
        drawCircle(lineX, lineY) // draw circle at line end, prevents flat ends
        drawLine(moveX, moveY, lineX, lineY)

        moveX = lineX
        moveY = lineY
    }
})

function drawCircle(moveX, moveY) {
    ctx.beginPath();
    ctx.arc(moveX, moveY, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(moveX, moveY, lineX, lineY) {
    ctx.beginPath()
    ctx.moveTo(moveX, moveY)
    ctx.lineTo(lineX, lineY)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))