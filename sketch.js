var nois, env, delay;
var osc;
var playing = false;

var cells = [];
var rows;
var cols;
var aliveCount;
var side;
var factor;

function setup() {
  createCanvas(720,480);
  rectMode(CENTER);
  background(30);
  frameRate(18);
  noStroke();

  aliveCount=0;
  side = 5;
  factor = 12;
  rows = height/factor;
  cols = width/factor;

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();

  nois = new p5.Noise('brown');
  nois.amp(0);
  nois.start();
  delay = new p5.Delay();
  delay.process(nois, .12, .7, 2300);
  env = new p5.Env(.01, 0.2, .2, .1);

  for(i=0;i<cols;i++){
    cells[i] = [];
    for(j=0;j<rows;j++){
        cells[i][j] = new cell(i*factor,j*factor,side,i,j);
    }
  }
}

function draw() {
  playMute();
  background(0);
  for(i=1;i<cols-1;i++){
    for(j=1;j<rows-1;j++){
      cells[i][j].show();
      generate(i,j);
    }
  }
}
function generate(i,j){
  cells[i][j].generation++;
  cells[i][j].prev = cells[i][j].state;
  switch(cells[i][j].calc()){
    case 0:
      cells[i][j].state =  0;
      if(cells[i][j].prev==1){aliveCount--}
      break;
    case 1:
      cells[i][j].state =  0;
      if(cells[i][j].prev==1){aliveCount--}
      break;
    case 2:
      if(cells[i][j].state == 1){
        cells[i][j].state =  1;
      }
      break;
    case 3:
        cells[i][j].state =  1;
        if(cells[i][j].prev==0){aliveCount++}
        break;
    case 4:
      cells[i][j].state =  0;
      if(cells[i][j].prev==1){aliveCount--}
      break;
    case 5:
      cells[i][j].state =  0;
      if(cells[i][j].prev==1){aliveCount--}
      break;
    case 6:
      cells[i][j].state =  0;
      if(cells[i][j].prev==1){aliveCount--}
      break;
    case 7:
      cells[i][j].state =  0;
      if(cells[i][j].prev==1){aliveCount--}
      break;
    case 8:
      cells[i][j].state =  0;
      if(cells[i][j].prev==1){aliveCount--}
      break;
  }
  return cells[i][j].state;
}

function playMute(){
  if(key=="P" || key == "p"){
      osc.amp((aliveCount)/((rows*cols)));
      nois.amp((aliveCount)/((rows*cols)));
      osc.freq(round(map(aliveCount,1700,0,200,1200)));
      playing = true;
    }
  if(key=="M" || key == "m"){
      osc.amp(0);
      nois.amp(0);
      playing = false;
    }
}
