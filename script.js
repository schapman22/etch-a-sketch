
function createGrid() {
    const container = document.getElementById("container");

    for (i = 1; i <= 16; i++) {
        for ( j = 1; j <= 16; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            container.appendChild(square);
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = 'black';
            });
        }
    }
}

window.addEventListener("load", createGrid);


