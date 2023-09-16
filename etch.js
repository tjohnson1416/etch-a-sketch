/*window.addEventListener('load', makeGrid());*/

makeGrid();
function makeGrid() {
    console.log('working 1232123123')
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
    const pixels = document.querySelectorAll('.grid-pixel').forEach( (pixel) => {
        pixel.style.height = '50px';
        pixel.style.width = '50px';
    })
};

const pixels = document.querySelectorAll('.grid-pixel').forEach( (pixel) => {
    pixel.addEventListener('mouseover', (x) => {
        pixel.style.backgroundColor = 'black';
        console.log('hover detected');
    })
})