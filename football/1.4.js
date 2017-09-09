Game.setBackgroundImage('/image/game/soccer.jpg');

var p1 = new Robot(140, 250);
p1.strokeColor = 'white';
p1.setKeys("w", "d", "s", "a")

var p2 = new Robot(560, 250);
p2.fillColor = 'red';
p2.strokeColor = 'orange';

function moveObject() {
  if (this.velocity.length > this.MAX_SPEED) {
    this.velocity.length = this.MAX_SPEED;
  } else if (this.velocity.length < this.MIN_SPEED) {
    this.velocity.length = 0;
  } else {
    this.velocity.length *= this.DECELERATION;
  }
  
  this.position += this.velocity;
};

function Robot(x, y) {
  //Add private variables
  var robot = new Shape.Circle(x, y, 20);
  robot.velocity = new Point(0, 0);
  robot.strokeWidth = 4;
  robot.fillColor = 'blue';

  var upKey = 'up', downKey = 'down', leftKey = 'left', rightKey = 'right';
  
  robot.ACCELERATION = 0.2;
  robot.DECELERATION = 0.92;
  robot.MAX_SPEED = 4;
  robot.MIN_SPEED = 0.05;
  
  robot.move = moveObject;
  
  robot.setKeys = function(up, right, down, left) {
    upKey = up;
    rightKey = right;
    downKey = down;
    leftKey = left;
    
  };
  
  //Handle key presses
  robot.onFrame = function(e) {
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
