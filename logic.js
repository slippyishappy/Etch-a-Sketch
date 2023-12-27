let container = document.querySelector(".container");
let gridRow, gridItem;
let clear = document.querySelector(".clear");
let changeSize = document.querySelector(".change-size");
let items;
let size = 16;

function createGrid(size) {
    container.innerHTML = '';
    for (let i = 0; i < size; i++) {
        gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
            for (let j = 0; j < size; j++) {
                gridItem = document.createElement('div');
                gridItem.style.cssText = `width: calc(500px/${size}); height: calc(500px/${size});`;
                gridItem.classList.add('grid-item');
                gridItem.addEventListener("mouseover", (event) => {
                    event.target.style.backgroundColor = "black";
                });
                gridRow.appendChild(gridItem);
            }
        container.appendChild(gridRow);
    }
}

changeSize.addEventListener("click", () => {
    items = document.querySelectorAll(".grid-item");
    items.forEach((item) => {
        item.style.cssText = "";
    });
    size = prompt("Enter the grid size");
    createGrid(size);
});

clear.addEventListener("click", () => {
    items = document.querySelectorAll(".grid-item");
    items.forEach((item) => {
        item.style.backgroundColor = "";
    });
});

createGrid(size);