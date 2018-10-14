var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var rightPressed = false;
var leftPressed = false;
var ballFired = false;
var angle = 0;

var ax = canvas.width/2;
var ay = canvas.height-30; // Origin point for arrow


var z = y - 100;  // Position of arrowhead

var dx = 3;
var dy = 3;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
    // angle += 0.5;

  }
  else if(e.keyCode == 37) {
    leftPressed = true;
    // angle -= 0.5;
  }
  else if(e.keyCode == 32) {
    ballFired = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false;
  }
  else if(e.keyCode == 37) {
    leftPressed = false;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawArrow() {
  ctx.beginPath();
  ctx.save();
  ctx.translate(ax, ay);
  ctx.moveTo(0, 0);
  ctx.rotate(angle * Math.PI / 180);
  ctx.lineTo(0, -200);
  ctx.stroke();
  ctx.restore();
}


function drawArrowAngle() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Gauge: "+angle, canvas.width-100, 20);
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawArrow();
  drawArrowAngle();

  if (x > canvas.width - ballRadius || x < 0 + ballRadius) {
    dx = -dx;
  }

  if (y > canvas.height - ballRadius || y < 0 + ballRadius) {
    dy = -dy;
  }


  if (rightPressed === true) {
    angle += 1;

  }
  else if (leftPressed === true) {
    angle -= 1;
  }


  if (ballFired === true) {
    x += dx;
    y += -dy;
  }


  requestAnimationFrame(draw);
}

draw();
