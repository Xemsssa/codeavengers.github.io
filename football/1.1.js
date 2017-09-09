Game.setBackgroundImage('/image/game/soccer.jpg');

var p1 = new Robot(140, 250);
p1.strokeColor = 'white';

var p2 = new Robot(560, 250);
p2.fillColor = "red";
p2.strokeColor = "orange";

function Robot(x, y) {
  //Add private variables
  var robot = new Shape.Circle(x, y, 20);
  robot.strokeWidth = 4;
  robot.fillColor = 'blue';
  
  return robot;
}
