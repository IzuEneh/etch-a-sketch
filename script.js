const gridContainer = document.querySelector('#grid-container');
const gridSideLength = gridContainer.clientWidth / 16; 

for (let i = 0; i < (16*16); i++) {
    let gridSquare = document.createElement('div');
    gridSquare.style.height = `${gridSideLength}px`;
    gridSquare.style.width = `${gridSideLength}px`;
    gridSquare.id = 'grid-square'
    gridContainer.appendChild(gridSquare);
}

const gridSquares = document.querySelectorAll('#grid-square');  
gridSquares.forEach(square => square.addEventListener('mouseenter', addHoverEffect))

const clearGridButton = document.querySelector('button');
clearGridButton.addEventListener('click', clearGrid)

function addHoverEffect(e) {
    this.classList.add('black-background');
}

function clearGrid(e) {
    gridSquares.forEach(square => square.classList.remove('black-background'));
}