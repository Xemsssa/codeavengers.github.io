var item;

function onMouseDown(e) {
  
  if (e.event.button == 2) {
      return;
    
  }
  
  //Create an ellipse on doubleClick
  if(e.event.detail == 2){
    item = new Shape.Ellipse(e.point, 1, 1);
  } else if (e.event.detail == 1) {
    item = new Shape.Rectangle(e.point, 1,1);
  
  } else {
    return;
  }
  
  item.fillColor = Color.random();
  item.fillColor.lightness = 0.6;
}

function onMouseDrag(e) {
  if (item == null) {
    return;
  }
  //Adjust the size of the item to the current mouse position
  var newBounds = new Rectangle(e.downPoint, e.point);
  
  if (newBounds.width > 0 && newBounds.height > 0) {
    item.bounds = newBounds;
  }
}

function onMouseUp(e) {
  if (item == null) {
    return;
  } else if (item.bounds.width < 5 || item.bounds.height < 5) {
    //Remove items that are too small
    item.remove();
  }
  item = null;
}

