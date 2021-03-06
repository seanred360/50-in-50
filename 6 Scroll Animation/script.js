const boxes = document.querySelectorAll('.box')
const mario = document.querySelector('.mario')

window.onload = toBottom;
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

//https://stackoverflow.com/questions/31173359/can-i-make-the-browser-window-start-at-the-bottom-of-the-page
function toBottom()
{
    window.scrollTo(0, document.body.scrollHeight);
}

