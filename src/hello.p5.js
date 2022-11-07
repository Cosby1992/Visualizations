const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 800;

let xCenter = Math.round(CANVAS_WIDTH / 2);
let yCenter = Math.round(CANVAS_HEIGHT / 2);

let angleInRadians = 0;
const radianUnit = (2*Math.PI) / 1000;

function setup() {
    createCanvas(800, 600);
    
    frameRate(100)
}

function draw() {
    background(220);

    angleInRadians += radianUnit;

    if(angleInRadians > (2 * Math.PI)) {
        angleInRadians = 0;
    }

    const x = xCenter + 100 * Math.cos(angleInRadians);
    const y = yCenter + 100 * Math.sin(angleInRadians);

    ellipse(x,y,80,80);
}