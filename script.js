const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const divs = document.querySelectorAll('.container div')




divs.forEach(div => { 
    div.addEventListener('mouseover', e => {
        e.target.classList.add('square:hover')
    })
})

btn.addEventListener('click', () => {
    createGrid(+prompt('Enter grid size: '))
})


function createGrid(size) {
    
    // removes pre existing grid
    while(container.lastElementChild)
            container.removeChild(container.lastElementChild)


    if(!size || size > 64){
        alert('Size isn\'s valid!')
        return
    } 
         
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let div = document.createElement('div')
            div.textContent = `DIV BOX: ${i} : ${j}`
            div.classList.add('square')
            container.appendChild(div)
        }
    }
}