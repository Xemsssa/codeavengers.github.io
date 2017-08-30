var brush = new Shape.Circle(-10, -10, 10);
brush.fillColor = 'red';

var path;

function onMouseMove(e) {
  brush.position = e.point;
}

function onMouseDown(e) {
  path = new Path();
  path.strokeColor = brush.fillColor;
}

function onMouseDrag(e) {
  brush.position = e.point;
  path.add(e.point);
}

function onMouseUp(e) {
  if(path.length == 0) {
    brush.fillColor.hue += 30;
  }
}
