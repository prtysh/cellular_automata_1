function cell(x,y,size,i,j){
  this.x = x;
  this.y = y;
  this.size = size;
  this.col = i;
  this.row = j;
  this.generation = 0;
  this.state = round(random(0,1));
  this.prev = 0;
  this.color = color(0,0,0);
  this.pitch = 200;
  if(this.state==1){
    aliveCount++;
  }

  var neighbours = 0;

  this.expand = function() {
    if(this.size < 15){
      this.size+=2;
    }
  }

  this.contract = function() {
    if(this.size > 5){
      this.size--;
      //this.amp-+0.1;
      //osc.amp(this.amp);
    }
  }

  this.calc = function(){
    neighbours = 0;
    for(i=this.col-1; i<this.col+2 ;i++){
      for(j=this.row-1; j<this.row+2 ;j++){
        neighbours += cells[i][j].prev;
        //console.log(neighbours);
      }
    }
    neighbours -= this.state;
    return neighbours;
  }

  this.show = function(){
    if (this.state==1 && this.prev==0){
      this.expand();
      this.color = color(0,200,200,200);
    } else if (this.state==1 && this.prev==1){
        this.contract();
        this.color = color(0,150,0,150);
    } else if (this.state==0 && this.prev==0) {
        this.color = color(15,15,15,150);
    } else {
        this.contract();
        this.color = color(80,0,0,150);
    }
    fill(this.color);
    rect(this.x,this.y,this.size,this.size);
  }
}
