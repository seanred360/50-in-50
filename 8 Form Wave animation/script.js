const labels = document.querySelectorAll('.form-control label')

console.log(labels)

labels.forEach(label => {
    // <label></label> = Email
    label.innerHTML = label.innerText
        // label.innerText = [E, m, a, i, l]
        .split('')
        // [ <span style="transition-delay:50ms">E<span> ..etc.. ]
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) 
        // '<span style="transition-delay:0ms">E<span><span style="transition-delay:50ms">m<span>'
        // makes one big string out of all the spans combined because they are an array, need a string to display
        .join('')
}) 

