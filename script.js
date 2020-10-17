const container = document.getElementById("container");

for (i = 0; i < 256; i++) {
    container.innerHTML += '<div class="box"></div>'
}

function createGrid(x, y) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${x}, auto)`;
    container.style.gridTemplateRows = `repeat(${y}, auto)`;
    for(let i = 0; i < x; i++) {
        for(let j = 0; j < y; j++) {
            let createBox = document.createElement("div");
            createBox.setAttribute("class", "box");
            container.appendChild(createBox);
        }
    }
}

document.querySelectorAll(".box").forEach(item => {
    item.addEventListener("mouseover", event => {
        item.style.backgroundColor = "black";
        console.log("cheese");
    })
})

/* function createGrid () {
    deleteBoxes();
    let x = prompt("How many columns(x axis)?", "20");
    let y = prompt("How many rows (y axis)?", "20");
    let z = x * y;
    for (i = 0; i < z; i++) {
        container.innerHTML += '<div class="box"></div>'
    }
    container.style.gridTemplateColumns = `repeat(${x}, auto)`;
    container.style.gridTemplateRows = `repeat(${y}, auto)`;
    addListeners();
}
*/
function deleteBoxes () {
    document.querySelectorAll(".box").forEach(item => {
        item.remove();
        })
}

function addListeners () {
    document.querySelectorAll(".box").forEach(item => {
        item.addEventListener("mouseover", event => {
            item.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        })
    })
}

function newGrid() {
    let x = prompt("How many columns(x axis)?", "20");
    let y = prompt("How many rows (y axis)?", "20");
    createGrid(x, y);
    addListeners();
}

createGrid(16, 16);
addListeners();