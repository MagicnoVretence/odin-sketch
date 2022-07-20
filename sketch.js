let sideLength = 16;
const mainContainer = document.getElementById('main-container');
const sizeButton = document.getElementById('changeSize');
const resetButton = document.getElementById('reset');
const declaration = document.getElementById('gridSize');

function inputSize() {
    sideLength = parseInt(prompt('Input new number of rows/columns (2-128):'));
    if ((!sideLength) || (typeof sideLength != 'number')) {
        sideLength = 16;
    } else if (sideLength < 2) {
        sideLength = 2;
    } else if (sideLength > 128) {
        sideLength = 128;
    };
    declaration.innerText = `${sideLength} x ${sideLength} grid`;
    setupGrid(sideLength);
}

function paintMe(event) {
    var cell = event.currentTarget;
    var h = `${Math.floor(Math.random()*100.99)}`;
    var s = `${Math.floor(Math.random()*100.99)}%`;
    var l = parseInt(cell.dataset.l) > 0 ? parseInt(cell.dataset.l) - 10 : parseInt(cell.dataset.l);
    cell.dataset.l = +l;
    cell.style.backgroundColor = `hsl(${h}, ${s}, ${l}%)`;
}

function reset() {
    for (let i = 0; i < mainContainer.children.length; i++) {
        var child = mainContainer.children[i];
        child.style.backgroundColor = 'white';
    };
}

function setupGrid(length) {
    while (mainContainer.firstChild) {
        mainContainer.firstChild.removeEventListener('mouseover', paintMe);
        mainContainer.firstChild.remove();
    }

    mainContainer.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${length}, 1fr)`;

    for (let i = 1; i < (length ** 2 + 1); i++){
        var newDiv = document.createElement('div');
        newDiv.dataset.l = '100';
        newDiv.style.backgroundColor = 'hsl(0, 0%, 100%)';
        var column = (i) % length;
        var row = ((i - column) / length) + 1;
        if (column == 0) {
            column = length;
            row -= 1;
        };
        newDiv.id = `square${i}`;
        newDiv.style.gridRowStart = `${row}`;
        newDiv.style.gridColumnStart = `${column}`;
        newDiv.addEventListener('mouseover', paintMe);
        mainContainer.appendChild(newDiv);
    }
}

resetButton.addEventListener('click', reset);
sizeButton.addEventListener('click', inputSize);
setupGrid(sideLength);
