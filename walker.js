/**
  This is the walker, a utility to make it easier to draw lines on the canvas.
  It has a direction which is represented by a number that goes from 0 (right) to 360(right)
*/

var walker = {};
walker.dir = 0;
walker.x = 0; //actual X position
walker.y = 0; //actual Y position

//accepts a new direction in degrees and converts it to radians
walker.setDir = function(nDir) {
  while (nDir >= 360) {
    nDir -= 360;
  }
  walker.dir = nDir * (Math.PI / 180);
};

//returns the direction in degrees
walker.getDir = function() {
  return walker.dir * (180 / Math.PI)
};

//takes into account the distance to walk and current direction to find out
//the end position after movements
walker.walk = function(distance) {
  var dirDeegres = walker.getDir();
  if (dirDeegres <= 90) {
    var magX = Math.floor(distance * Math.cos(walker.dir)); //the magnitude to move in the X direction
    var magY = -Math.floor(distance * Math.sin(walker.dir)); //the magnitude to move in the Y direction
  } else if (dirDeegres > 90 && dirDeegres <= 180) {
    walker.setDir(180 - dirDeegres);
    var magX = -Math.floor(distance * Math.cos(walker.dir)); //the magnitude to move in the X direction
    var magY = -Math.floor(distance * Math.sin(walker.dir)); //the magnitude to move in the Y direction
  } else if (dirDeegres > 180 && dirDeegres <= 270) {
    walker.setDir(270 - dirDeegres);
    var magX = -Math.floor(distance * Math.sin(walker.dir)); //the magnitude to move in the X direction
    var magY = Math.floor(distance * Math.cos(walker.dir)); //the magnitude to move in the Y direction
  } else if (dirDeegres > 270 && dirDeegres <= 360) {
    walker.setDir(360 - dirDeegres);
    var magX = Math.floor(distance * Math.cos(walker.dir)); //the magnitude to move in the X direction
    var magY = Math.floor(distance * Math.sin(walker.dir)); //the magnitude to move in the Y direction
  }
  walker.setDir(dirDeegres);

  walker.x += magX;
  walker.y += magY;
  ctx.lineTo(walker.x, walker.y);
  ctx.stroke();
};

//moves the walker to a new absolute position denoted by (newX, newY)
walker.moveTo = function(newX, newY) {
  walker.x = newX;
  walker.y = newY;
  ctx.moveTo(walker.x, walker.y);
};

//draws a line from the current walker position to the absolute position denoted by (newX, newY)
walker.drawTo = function(newX, newY) {
  walker.x = newX;
  walker.y = newY;
  ctx.lineTo(walker.x, walker.y);
  ctx.stroke();
};

//clears the canvas for redrawing
walker.clear = function() {
  //ctx.clearRect(0, 0, mCanvas.width, mCanvas.height);

  //this is chosen on the above since we need to clear ALL of the canvas data
  //up to this time this is the best way I've found to do this but it doesn't
  //look or feel very elegant.
  //TODO make this better
  mCanvas.width = mCanvas.width;
};

//draws a circle of a certain radius and the center of it will be the position
//of the walker
walker.drawCircle = function(radius) {
  ctx.beginPath();
  ctx.arc(walker.x, walker.y, radius, 0, 2 * Math.PI);
  ctx.stroke();

  //drawing the cirle moves the current context's coordinates so we need to
  //restore them
  ctx.moveTo(walker.x, walker.y);
};
