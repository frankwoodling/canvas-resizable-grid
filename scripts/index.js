class Grid {

  constructor(width, height, size, color) {
    this.gridWidth = width;
    this.gridHeight = height;
    this.gridSize = size;
    this.gridColor = color;
    this.boxColorTrue = 'black';
    this.boxColorFalse = 'white';
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.addEventListener('click', this.handleGridClick.bind(this));
  }

  setupCanvas() {
    this.canvas.setAttribute('width', (this.gridWidth + 1).toString());
    this.canvas.setAttribute('height', (this.gridHeight + 1).toString());
  }

  drawGrid() {
    for (let x = 0.5; x < this.gridWidth + 1; x += this.gridSize) {
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.gridHeight);
    }

    for (let y = 0.5; y < this.gridHeight + 1; y += this.gridSize) {
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.gridWidth, y);
    }

    this.ctx.strokeStyle = this.gridColor;
    this.ctx.stroke();
  }

  fillBox(x, y, size, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(
      Math.floor(x) * size,
      Math.floor(y) * size,
      size,
      size);
  }

  handleGridClick(e) {
    console.log(this.gridArr);

    let xPos =  Math.floor(e.offsetX / this.gridSize),
        yPos =  Math.floor(e.offsetY / this.gridSize);

    this.gridArr[yPos][xPos] = !this.gridArr[yPos][xPos];

    this.gridArr[yPos][xPos] ? this.fillBox(xPos, yPos, this.gridSize, this.boxColorTrue) :
      this.fillBox(xPos, yPos, this.gridSize, this.boxColorFalse);

    this.drawGrid();

  };

  fillGridArr(n, m, fill) {
    return Array(m).fill().map(() => Array(n).fill(fill));
  }

  initGridArr() {
    this.gridArr = this.fillGridArr(this.gridWidth/this.gridSize, this.gridHeight/this.gridSize, false);
    console.log(this.gridArr)
  }

  enforceGridDimensions() {
    if (this.gridSize > this.gridWidth || this.gridSize > this.gridHeight) {
      return
    }
    if (this.gridWidth%this.gridSize !== 0) {
      console.log('test_false')
    }
    else {
      console.log('test_true')
    }
  }

  getGridDimensions() {
    return [(this.gridWidth/this.gridSize-1), (this.gridHeight/this.gridSize-1)];
  }

  drawArrToGrid() {
    let width = this.getGridDimensions()[0],
        height = this.getGridDimensions()[1];

    for (let w = 0; w <= width; w++) {
      for (let h = 0; h <= height; h++) {
        let colorBox = this.gridArr[h][w] ? this.fillBox(w, h, this.gridSize, this.boxColorTrue) :
          this.fillBox(w, h, this.gridSize, this.boxColorFalse);
      }
    }
  }

  enlargeGrid() {

  }

  shrinkGrid() {

  }

  clearGrid() {
    this.initGridArr();
    this.drawArrToGrid();
    this.drawGrid();
  }
}

let grid = new Grid(700, 400, 50, '#ddd');
//grid.enforceGridDimensions();
grid.setupCanvas();
grid.initGridArr();
grid.drawArrToGrid();
grid.drawGrid();

// TODO: For debugging only.  Remove when finished.
const getMouseBoxPos = (e) => {
  return { x:e.clientX, y:e.clientY };
};

(styleCoordText => {
  document.getElementById("mouseDiv").style.width = grid.gridWidth + 'px';
  document.getElementById("mouseDiv").style.textAlign = 'center';
})();

document.onmousemove = (e) => {
  let mouseBoxPos = getMouseBoxPos(e),
    mouseBoxPosX = Math.floor(mouseBoxPos.x / grid.gridSize),
    mouseBoxPosY = Math.floor(mouseBoxPos.y / grid.gridSize);

  mouseDiv.textContent = 'x: ' + mouseBoxPosX + ', y: ' + mouseBoxPosY;
};