function getSquare(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left)%10,
    y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top)%10
  };
}

let zoomLevel = 15;

function drawGrid(context) {

  for (let x = 0; x < context.canvas.width; x += zoomLevel) {
    context.moveTo(x, 0);
    context.lineTo(x, context.canvas.width);
  }

  for (let y = 0; y < context.canvas.width; y += zoomLevel) {
    context.moveTo(0, y);
    context.lineTo(context.canvas.width*zoomLevel, y);
  }

  context.strokeStyle = "#ddd";
  context.stroke();

}

function fillSquare(context, x, y){
  context.fillStyle = "gray";
  context.fillRect(Math.ceil(zoomLevel/x)*zoomLevel,y,Math.floor(zoomLevel/y)*zoomLevel, zoomLevel);
}

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

drawGrid(context);

canvas.addEventListener('click', handleClick);

function handleClick(e) {
  context.fillStyle = "black";

  context.fillRect(Math.floor(e.offsetX / zoomLevel) * zoomLevel,
    Math.floor(e.offsetY / zoomLevel) * zoomLevel,
    zoomLevel,
    zoomLevel);
}

canvas.addEventListener('click', function(evt) {
  let mousePos = getSquare(canvas, evt);
  fillSquare(context, mousePos.x, mousePos.y)
}, false);

function handleResize() {

  function handleResize() {
    let w = window.innerWidth,
        h = window.innerHeight;

    context.canvas.width = w;
    context.canvas.height = h;

    let windowRatio = w/h;
    let scale = w/100;
    if (windowRatio > 100) {
        scale = h/100;
    }
  }

  drawGrid(context)
}

window.addEventListener("resize", handleResize);

// https://stackoverflow.com/questions/13990128/how-to-fill-a-cell-on-clicking-the-grid-on-canvas-in-html5
