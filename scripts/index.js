const gridWidth = 500,
      gridHeight = 500,
      gridSize = 50;

const drawGrid = (context, width, height, size = 1) => {

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
};

const initArr = (n, m, fill) => {
  return Array(m).fill().map(() => Array(n).fill(fill));
};

let gridArr = initArr(gridWidth/gridSize, gridHeight/gridSize, false);

let handleFillBox = (e) => {
  context.fillStyle = "black";
  let xPos =  Math.floor(e.offsetX / gridSize),
      yPos =  Math.floor(e.offsetY / gridSize);

  context.fillRect(
    xPos * gridSize,
    yPos * gridSize,
    gridSize,
    gridSize);

    gridArr[yPos][xPos] = !gridArr[yPos][xPos];
    console.table(gridArr);
    //console.log(gridArr[xPos][yPos]);
    //console.log(xPos, yPos);
  //gridArr[e.offsetX][e.offsetY] = !gridArr[e.offsetX][e.offsetY]
};

const fillBox = (x, y, size) => {
  context.fillStyle = "black";
  context.fillRect(
    Math.floor(((x - 1) * size) / size) * size,
    Math.floor(((y - 1) * size) / size) * size,
    size,
    size);
};

const getMouseBoxPos = (e) => {
  return {x:e.clientX,y:e.clientY};
};

(styleCoordText => {
  document.getElementById("mouseDiv").style.width = gridWidth + 'px';
  document.getElementById("mouseDiv").style.textAlign = 'center';
})();


const canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d');

canvas.setAttribute('width', (gridWidth + 1).toString());
canvas.setAttribute('height', (gridHeight + 1).toString());

drawGrid(context, gridWidth, gridHeight, gridSize);

canvas.addEventListener('click', handleFillBox);

document.onmousemove = (e) => {
  let mouseBoxPos = getMouseBoxPos(e),
      mouseBoxPosX = Math.floor(mouseBoxPos.x / gridSize);
      mouseBoxPosY = Math.floor(mouseBoxPos.y / gridSize);

  mouseDiv.textContent = 'x: ' + mouseBoxPosX + ', y: ' + mouseBoxPosY;
};
