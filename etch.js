/*window.addEventListener('load', makeGrid());*/

makeGrid();

const button = document.querySelector('#change-grid');
button.addEventListener('click', changeGrid());

function clearGrid(gridSize) {
    const pixels = document.querySelectorAll('.grid-pixel').forEach((pixel => {
        pixel.remove();
    }));
    const rows = document.querySelectorAll('.grid-row').forEach((row => {
        row.remove();
    }));
    makeGrid(gridSize);
}

function changeGrid() {
    let gridSize = parseInt(prompt('Enter the desired grid size'));
    if (isNaN(gridSize) || gridSize < 1){
        alert('Entry needs to be a number greater than 0');
        return;
    }
    clearGrid(gridSize);
}

function makeGrid(gridSize = 16) {
    console.log('working 1232123123')
    let gridContainer = document.querySelector('#grid-container');
    for (let i = 0; i < gridSize; i++){ 
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);
        for (let j = 0; j < gridSize; j++){
            let gridPixel = document.createElement('div');
            gridPixel.classList.add('grid-pixel');
            gridRow.appendChild(gridPixel);
        }
    }
    let pixels = document.querySelectorAll('.grid-pixel').forEach( (pixel) => {
        pixel.style.height = (800/gridSize) + 'px';
        pixel.style.width = (800/gridSize) + 'px';
        pixel.style.border = 'solid grey 1px'
        pixel.addEventListener('mouseover', (x) => {
            pixel.style.backgroundColor = 'black';
        })
    })
};

