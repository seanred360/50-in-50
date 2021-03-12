const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        removeActive()
        toggle.parentNode.classList.toggle('active')
    })
})

function removeActive() {
    toggles.forEach(toggle => {
        toggle.parentNode.classList.remove('active')
    })
}
