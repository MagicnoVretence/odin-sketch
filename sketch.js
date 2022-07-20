const sideLength = 16;
const mainContainer = document.getElementById('main-container');

function paintMe(event) {
    var cell = event.currentTarget;
    cell.style.backgroundColor = 'black';
}

function setupGrid(length) {
    mainContainer.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${length}, 1fr)`;

    for (let i = 1; i < (length ** 2 + 1); i++){
        var newDiv = document.createElement('div');
        newDiv.style.backgroundColor = 'white';
        var column = (i) % length;
        var row = ((i - column) / length) + 1;
        if (column == 0) {
            column = 16;
            row -= 1;
        };
        newDiv.id = `square${i}`;
        newDiv.style.gridRowStart = `${row}`;
        newDiv.style.gridColumnStart = `${column}`;
        newDiv.addEventListener('mouseover', paintMe);
        mainContainer.appendChild(newDiv);
    }
}

setupGrid(sideLength);
