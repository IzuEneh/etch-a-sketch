const gridContainer = document.querySelector('#grid-container');
fillGridWithSquares(16);
setHoverEffectOnGrid();

const clearGridButton = document.querySelector('#clear-grid-btn');
clearGridButton.addEventListener('click', clearGrid);

const defaultColorSchemeBtn = document.querySelector('#default-btn');
defaultColorSchemeBtn.addEventListener('click', setHoverEffectOnGrid);

const rainbowColorSchemeBtn = document.querySelector('#rainbow-btn');
rainbowColorSchemeBtn.addEventListener('click', setRainbowHoverEffect);

const gradientColorSchemeBtn = document.querySelector('#gradient-btn');
gradientColorSchemeBtn.addEventListener('click', setGradientHoverEffect)

const gradientValues = ['#e5e5e5', '#cccccc', '#b2b2b2', '#999999', '#7f7f7f',
'#666666', '#4c4c4c', '#323232', '#191919', '#000000'];

function fillGridWithSquares(numSquares) {
    const gridSideLength = gridContainer.clientWidth / numSquares; 
    
    for (let i = 0; i < (numSquares*numSquares); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.style.height = `${gridSideLength}px`;
        gridSquare.style.width = `${gridSideLength}px`;
        gridSquare.id = `grid-square-${i}`
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
    const gridSquares = getGridQuares()  
    gridSquares.forEach(square => square.addEventListener('mouseenter', addHoverEffect));
}

function setRainbowHoverEffect() {
    const gridSquares = getGridQuares();
    gridSquares.forEach(square => {
        square.removeEventListener('mouseenter', addHoverEffect);
        square.removeEventListener('mouseenter', addGradientBackground);
        square.addEventListener('mouseenter', addRainbowColor);
    });
}

function setGradientHoverEffect() {
    const gridSquares = getGridQuares();
    gridSquares.forEach(square => {
        square.removeEventListener('mouseenter', addHoverEffect);
        square.removeEventListener('mouseenter', addRainbowColor);
        square.addEventListener('mouseenter', addGradientBackground);
    });
}

function addHoverEffect(e) {
    this.classList.add('black-background');
}

function addRainbowColor() {
    this.style.backgroundColor = `#${getRandomHexColor()}`
}

function addGradientBackground() {
    const oldBackground = this.style.backgroundColor
    if(!oldBackground) {
        this.style.backgroundColor = gradientValues[0];
        return;
    }
    const oldIndex = gradientValues.indexOf(this.style.backgroundColor);
    this.style.backgroundColor = gradientValues[oldIndex + 1];

}

function getGridQuares() {
    return document.querySelectorAll("[id^='grid-square']");
}

function getRandomHexColor() {
    return Math.floor(Math.random() * 16777215)
}
