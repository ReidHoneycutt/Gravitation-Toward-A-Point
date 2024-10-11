let arr = [];
let length = 200;
let W = window.innerWidth;
let H = window.innerHeight;
let G = hinduGod.length;
var temp_x = [];
var temp_y = [];
let change = 0;
let n = 0
let MAX = Math.sqrt(Math.pow(H, 2)+Math.pow(W, 2));
let y0 = 0;
let r = 50;
let FC;


function setup() {
  createCanvas(W, H);
  background(0);
  
  for (let i = 0; i < G; i++) {
    arr[i] = new Point(random(-W, W), random(-H, H), i);
  }
  for (let i = 0; i < G; i++) { 
    temp_x[i] = hinduGod[i][0];
    temp_y[i] = hinduGod[i][1];
  }   
  let w = max(temp_x) - min(temp_x);
  let h = max(temp_y) - min(temp_y);

  //(3) scale the dimensions of the picture up to the size of the screen
  for (let i = 0; i < G; i++) {
    hinduGod[i][0] *= (W/w);
    hinduGod[i][1] *= (H/h);
  }
}


function draw() {
    FC = frameCount;
    background(0);
    for (let i = 0; i < G; i++) {
        arr[i].show();
        arr[i].update();
    }
    if (FC % 30 == 0) {
        doPattern();
    }
}

function mousePressed() {
    change += 1;
}

function doPattern() {
    stroke(255, 0, 255)
    noFill()
    background(0);
    y0 = y0 % r+1;
    for (let y = y0; y < int(H); y+=int(r/2)) {
        for (let x = 0; x < int(W); x+=int(r/2)) {
            ellipse(x,y,r);
        }
    }
    y0 = y0+r;
}
