const gridContainer = document.querySelector('#grid-container');
fillGridWithSquares(16);
setHoverEffectOnGrid();

const clearGridButton = document.querySelector('button');
clearGridButton.addEventListener('click', clearGrid)

function fillGridWithSquares(numSquares) {
    const gridSideLength = gridContainer.clientWidth / numSquares; 
    
    for (let i = 0; i < (numSquares*numSquares); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.style.height = `${gridSideLength}px`;
        gridSquare.style.width = `${gridSideLength}px`;
        gridSquare.id = 'grid-square'
        gridContainer.appendChild(gridSquare);
    }
}

function clearGrid(e) {
    gridContainer.replaceChildren();
    numSquares = parseInt(prompt('How many squares would you like?', 16));
    fillGridWithSquares(numSquares);
    setHoverEffectOnGrid();
}

function setHoverEffectOnGrid() {
    const gridSquares = document.querySelectorAll('#grid-square');  
    gridSquares.forEach(square => square.addEventListener('mouseenter', addHoverEffect))
}

function addHoverEffect(e) {
    this.classList.add('black-background');
}
