let gridSize = 16;

function createGrid(gridSize) {
    const container = document.getElementById("container");
    container.style.setProperty('--grid-size', gridSize);

    container.innerHTML = '';

    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            container.appendChild(square);
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = 'black';
            });
        }
    }
}

function changeGridSize() {
    gridSize = prompt("Enter grid size (1-100)", "16");
    if (gridSize >= 1 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        changeGridSize();
    }
    
}

window.addEventListener("load", () => createGrid(gridSize));


