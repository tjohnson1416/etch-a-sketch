window.addEventListener('load', makeGrid());

function makeGrid() {
    const gridContainer = document.querySelector('#grid-container');
    for (let i = 0; i < 16; i++){ /*Make 16 rows*/
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridContainer.appendChild(gridRow);
        for (let j = 0; j < 16; j++){
            const gridPixel = document.createElement('div');
            gridPixel.classList.add('grid-pixel');
            gridRow.appendChild(gridPixel);
        }
    }
};