const container = document.querySelector('.container')
let div;



for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16 ; j++){
        div = document.createElement('div')
        div.textContent = `DIV BOX: ${i} : ${j}`
        div.classList.add('square')
        container.appendChild(div)
    }
}
const divs = document.querySelectorAll('.container div')
// console.log(divs)

divs.forEach(div => { 
    div.addEventListener('mouseover', e => {
        e.target.classList.add('square:hover')
    })
})

