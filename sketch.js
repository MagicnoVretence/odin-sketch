const sideLength = 16;
const mainContainer = document.getElementById('main-container');

function setupGrid(length) {
    mainContainer.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${length}, 1fr)`;

    for (let i = 0; i < (length ** 2); i++){
        
    }
}