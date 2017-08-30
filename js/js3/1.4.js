var brushColor = Color.random();

function onMouseDrag(event) {
  var s = new Shape.Circle(event.point, 10);
  s.fillColor = brushColor;
  s.opacity = .4;
}

function onMouseUp(event) {
  brushColor = Color.random();
}
