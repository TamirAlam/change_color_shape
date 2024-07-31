const round = document.querySelector(".round");
const shape = document.getElementById("shape");
const changeColorButton = document.getElementById("changeColor");
const changeShapeButton = document.getElementById("changeShape");
const shapes = ["square", "diamond", "triangle", "arrow", "frame", "star", "cross", "left-point", "right-point", 
"parallal", "cheg"];

function generateColor() {
    return Math.floor(Math.random() * 255);
}
function changeColor() {
    const newColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`;
    round.style.backgroundColor = newColor;
}
function randomShape() {
    return shapes[Math.floor(Math.random() * shapes.length)];
}
function changeShape() {
    shape.className = `shape ${randomShape()}`;
}
changeColorButton.addEventListener("click", changeColor);
changeShapeButton.addEventListener("click", changeShape);