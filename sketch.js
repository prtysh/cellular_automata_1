var cells = [];
var rows;
var cols;

function setup() {
  createCanvas(720,480);
  background(51);
  frameRate(18);
  noStroke();
  rows = height/10;
  cols = width/10;

  for(i=0;i<cols;i++){
    cells[i] = [];
    for(j=0;j<rows;j++){
        cells[i][j] = new cell(i*10,j*10,10,i,j);
    }
  }
}

function draw() {
  for(i=1;i<cols-1;i++){
    for(j=1;j<rows-1;j++){
      cells[i][j].show();
      generate(i,j);
      //cells[i][j].calc();
    }
  }
}
function generate(i,j){
  cells[i][j].generation++;
  cells[i][j].prev = cells[i][j].state;
  switch(cells[i][j].calc()){
    case 0:
      cells[i][j].state =  0;
      break;
    case 1:
      cells[i][j].state =  0;
      break;
    case 2:
      if(cells[i][j].state == 1){
        cells[i][j].state =  1;
      }
      break;
    case 3:
        cells[i][j].state =  1;
        break;
    case 4:
      cells[i][j].state =  0;
      break;
    case 5:
      cells[i][j].state =  0;
      break;
    case 6:
      cells[i][j].state =  0;
      break;
    case 7:
      cells[i][j].state =  0;
      break;
    case 8:
      cells[i][j].state =  0;
      break;
  }
  return cells[i][j].state;
}
