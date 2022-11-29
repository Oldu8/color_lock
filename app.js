const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
    event.preventDefault();
    if (event.code.toLowerCase() === 'space') {
        setRandomColor()
    }
})

document.addEventListener('click', event => {
    const type = event.target.dataset.type;
    if (type === 'lock') {
        const node = event.target.tagName.toLowerCase() === 'i' ? event.target : event.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    }
    else if (type === 'copy') {
        copyToClick(event.target.textContent)
    }
})
// function generateColor() {
//     const hex = '0123456ABCDEF'
//     let color = '';
//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * hex.length)]
//     }
//     return "#" + color
// }

function copyToClick(text) {
    navigator.clipboard.writeText(text)
}

function setRandomColor() {
    cols.forEach((col) => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')

        const color = chroma.random()
        const title = col.querySelector('h2')
        const button = col.querySelector('button')
        if (isLocked) {
            return
        }
        col.style.background = color
        title.textContent = color
        setTextColor(title, color)
        setTextColor(button, color)
    })
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColor()