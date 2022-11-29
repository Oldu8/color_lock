const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
    if (event.code.toLowerCase() === 'space') {
        setRandomColor()
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

function setRandomColor() {
    cols.forEach((col) => {
        const color = chroma.random()
        const title = col.querySelector('h2')
        const button = col.querySelector('button')
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