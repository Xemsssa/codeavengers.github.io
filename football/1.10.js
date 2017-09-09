Game.setBackgroundImage('/image/game/soccer.jpg');

var SCREEN_HEIGHT = 500;
var SCREEN_WIDTH = 700;

var timer = new Game.Timer(50, new Point(350, 35), 'center');
timer.start();

var score1 = new Game.Score('Arsenal', [10, 35], 'left');
var score2 = new Game.Score('Manchester', [690, 35], 'right');

var goal1 = new Goal(0, score2);
var goal2 = new Goal(680, score1);

var ball = new Ball();

var p1 = new Robot(140, 250);
p1.strokeColor = 'white';
p1.setKeys('w', 'd', 's', 'a');

var p2 = new Robot(560, 250);
p2.fillColor = 'black';
p2.strokeColor = 'orange';

function Goal(x, score) {
  var goal = new Shape.Rectangle(x, 200, 20, 100);
  goal.fillColor = 'silver';
  
  goal.checkCollision = function() {
    if (this.hitTest(ball.position)) {
      ball.reset();
      score.add(1);
    }
  }
  
  return goal;
}

function Ball() {
  var ball = new Shape.Circle(new Point(0, 0), 8);
  ball.fillColor = 'white';
  ball.MASS = 0.04;
  ball.MAX_SPEED = 10;
  ball.MIN_SPEED = 0.1;
  ball.DECELERATION = 0.992;
  ball.WALL_DECELERATION = 0.95;
  
  ball.reset = function() {
    this.velocity = new Point(0, 2.5);
    this.position = new Point(SCREEN_WIDTH / 2, this.radius);
  };
  
  ball.reset();
  ball.onFrame = moveObject;
  
  return ball;
}

function moveObject() {
  if (!timer.isRunning()) return;
  
  if (this.velocity.length > this.MAX_SPEED) {
    this.velocity.length = this.MAX_SPEED;
  } else if (this.velocity.length < this.MIN_SPEED) {
    this.velocity.length = 0;
  } else {
    this.velocity.length *= this.DECELERATION;
  }
  var newPosition = this.position + this.velocity;
  var newY = Math.round(newPosition.y);
  var newX = Math.round(newPosition.x);
  
  //Stop the object from going off the screen
  if ((newX < this.radius && this.velocity.x < 0) || (newX > SCREEN_WIDTH - this.radius && this.velocity.x > 0)) {
    this.velocity.x *= -this.WALL_DECELERATION;
  }
  if ((newY < this.radius && this.velocity.y < 0) || (newY > SCREEN_HEIGHT - this.radius && this.velocity.y > 0)) {
    this.velocity.y *= -this.WALL_DECELERATION;
  }
  
  this.position += this.velocity;
};

function onFrame() {
  if (!timer.isRunning()) return;
  
  checkCollision(p1, ball);
  checkCollision(p2, ball);
  checkCollision(p1, p2);
  goal1.checkCollision();
  goal2.checkCollision();
}

function onMouseUp() {
  if (timer.isRunning()) return;
  
  timer.restart();
  
  score1.set(0);
  score2.set(0);
}

function calculateCollisionVelocity(o1, o2) {
  //Calculate normal
  var x = o1.position - o2.position;
  var n = x.dot(x);
  var v = o1.velocity - o2.velocity;
  var m = 2 * o2.MASS / (o1.MASS + o2.MASS);
  var delta = x * v.dot(x) / n * m;
  
  return o1.velocity - delta;
}

function checkCollision(o1, o2) {
  var hit = o1.hitTest(o2.position, {tolerance: o2.radius});
  
  if (hit) {
    var u2 = calculateCollisionVelocity(o2, o1);
    var u1 = calculateCollisionVelocity(o1, o2);

    //Move the ball back a bit so they are free to move
    o1.position -= o1.velocity * 1.5;
    o2.position -= o2.velocity * 1.5;

    o1.velocity = u1;
    o2.velocity = u2;
  }
}

function Robot(x, y) {
  //Add private variables
  var robot = new Shape.Circle(x, y, 20);
  robot.velocity = new Point(0, 0);
  robot.strokeWidth = 4;
  robot.fillColor = 'green';

  var upKey = 'up', downKey = 'down', leftKey = 'left', rightKey = 'right';
  
  robot.MASS = 1;
  robot.ACCELERATION = 0.2;
  robot.DECELERATION = 0.92;
  robot.MAX_SPEED = 4;
  robot.MIN_SPEED = 0.05;
  robot.WALL_DECELERATION = 0.8;
  
  robot.move = moveObject;
  
  robot.setKeys = function(up, right, down, left) {
    upKey = up;
    rightKey = right;
    downKey = down;
    leftKey = left;
  };
  
  //Handle key presses
  robot.onFrame = function(e) {
    if (!timer.isRunning()) return;
    
    var delta = new Point(0, 0);
    
    if (Key.isDown(leftKey)) {
      delta.x -= 1;
    }
    
    if (Key.isDown(rightKey)) {
      delta.x += 1;
    }
    
    if (Key.isDown(upKey)) {
      delta.y -= 1;
    }
    
    if (Key.isDown(downKey)) {
      delta.y += 1;
    }
  
    this.velocity += delta.normalize(this.ACCELERATION);
    this.move();
  };
  
  return robot;
}
