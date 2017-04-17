var cells = [];
var rows;
var cols;

function setup() {
  createCanvas(720,480);
  rectMode(CENTER);
  background(30);
  frameRate(18);
  noStroke();
  var side = 5;
  var factor = 10;
  rows = height/factor;
  cols = width/factor;


  for(i=0;i<cols;i++){
    cells[i] = [];
    for(j=0;j<rows;j++){
        cells[i][j] = new cell(i*factor,j*factor,side,i,j);
    }
  }
}

function draw() {
  background(0);
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
