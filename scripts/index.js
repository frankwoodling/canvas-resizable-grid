const gridWidth = 1200,
      gridHeight = 400,
      gridSize = 25;

function drawGrid(context, width, height, size = 1) {

  for (let x = 0.5; x < width + 1; x += size) {
    context.moveTo(x, 0);
    context.lineTo(x, height);
  }

  for (let y = 0.5; y < height + 1; y += size) {
    context.moveTo(0, y);
    context.lineTo(width, y);
  }

  context.strokeStyle = "#ddd";
  context.stroke();
}

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.setAttribute('width', (gridWidth + 1).toString());
canvas.setAttribute('height', (gridHeight + 1).toString());

drawGrid(context, gridWidth, gridHeight, gridSize);

canvas.addEventListener('click', handleFillBox);

function handleFillBox(e) {
  context.fillStyle = "black";
  context.fillRect(
    Math.floor(e.offsetX / gridSize) * gridSize,
    Math.floor(e.offsetY / gridSize) * gridSize,
    gridSize,
    gridSize);
}
