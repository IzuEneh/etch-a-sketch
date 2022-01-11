const gridContainer = document.querySelector('#grid-container');
const gridSideLength = gridContainer.clientWidth / 16; 

for (let i = 0; i < (16*16); i++) {
    let gridSquare = document.createElement('div');
    gridSquare.style.height = `${gridSideLength}px`;
    gridSquare.style.width = `${gridSideLength}px`;
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);
}

const gridSquares = document.querySelectorAll('.grid-square'); // change class to id; 
gridSquares.forEach(square => square.addEventListener('mouseenter', addHoverEffect))

function addHoverEffect(e) {
    this.classList.add('black-background');
}