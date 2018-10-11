var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;

var z = y - 100;  // Position of arrowhead

var dx = 10;
var dy = -2;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
  }
  else if(e.keyCode == 37) {
    leftPressed = true;
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

function drawArrow() {
  ctx.beginPath();
  ctx.moveTo (x, y);
  ctx.lineTo (x, z);
  ctx.stroke();
}


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}



function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawArrow();

  if (x > canvas.width - ballRadius || x < 0 + ballRadius) {
    dx = -dx;
  }

  if (y > canvas.height - ballRadius || y < 0 + ballRadius) {
    dy = -dy;
  }


  // x += dx;
  // y += dy;

  requestAnimationFrame(draw);
}

draw();
