const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
    button.addEventListener('click', function(evnt) {
        const x = evnt.clientX
        const y = evnt.clientY

        console.log(x, y)

        const circle = document.createElement('span')
        circle.classList.add('circle')

        const innerX = x - button.offsetLeft
        const innerY = y - button.offsetTop

        console.log(innerX, innerY)

        circle.style.left = innerX + 'px'
        circle.style.top = innerY + 'px'

        button.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})

// solution
// const buttons = document.querySelectorAll('.ripple')

// buttons.forEach(button => {
//     button.addEventListener('click', function(evnt) {
//         const x = evnt.clientX
//         const y = evnt.clientY
        
//         const buttonTop = evnt.target.offsetTop
//         const buttonLeft = evnt.target.offsetLeft

//         const xInside = x - buttonLeft
//         const yInside = y - buttonTop

//         const circle = document.createElement('span')
//         circle.classList.add('circle')
//         circle.style.top = yInside + 'px'
//         circle.style.left = xInside + 'px'

//         this.appendChild(circle)

//         setTimeout(() => circle.remove(), 500)
//     })
// })