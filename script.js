const container = document.querySelector('.container')
const btn = document.querySelector('.btn')


let divs;
btn.addEventListener('click', () => {
    divs = createGrid(+prompt('Enter grid size: '))
    divHover(divs)
    
})


function divHover(items) {
    items.forEach(item => {
        item.addEventListener('mouseover', e => {
            e.target.classList.add('square:hover')
            e.target.style.backgroundColor = 'black'
            e.target.style.border = 'solid white 2px'
        })
    })
}




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
            div.innerHTML = ''      
            div.classList.add('square')
            container.appendChild(div)
        }
    }
    return document.querySelectorAll('.container div')
}