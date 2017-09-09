Game.setBackgroundImage('/image/game/soccer.jpg');

var p1 = new Robot(140, 250);
p1.strokeColor = 'white';

var p2 = new Robot(560, 250);
p2.fillColor = 'red';
p2.strokeColor = 'orange';

function Robot(x, y) {
  //Add private variables
  var robot = new Shape.Circle(x, y, 20);
  robot.velocity = new Point(0, 0);
  robot.strokeWidth = 4;
  robot .fillColor = 'blue';

  var upKey = 'up', downKey = 'down', leftKey = 'left', rightKey = 'right';
  
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
  
    this.velocity = delta.normalize(2);
    this.position += this.velocity;
  };
  
  return robot;
}
