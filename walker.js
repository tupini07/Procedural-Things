/**
  This is the walker, a utility to make it easier to draw lines on the canvas.
  It has a direction which is represented by a number that goes from 0 (right) to 360(right)
*/

//constructor takes starting X and Y positions in the canvas;
function Walker(sX, sY) {
  this.dir = 0;
  this.x = sX;
  this.y = sY;

  //accepts a new direction in degrees and converts it to radians
  this.setDir = function(nDir) {
    while (nDir >= 360) {
      nDir -= 360;
    }
    this.dir = nDir * (Math.PI / 180);
  };

  //returns the direction in degrees
  this.getDir = function() {
    return this.dir * (180 / Math.PI)
  };

  //takes into account the distance to walk and current direction to find out
  //the end position after movements
  this.walk = function(distance) {
    var dirDeegres = this.getDir();
    if (dirDeegres <= 90) {
      var magX = Math.floor(distance * Math.cos(this.dir)); //the magnitude to move in the X direction
      var magY = -Math.floor(distance * Math.sin(this.dir)); //the magnitude to move in the Y direction
    } else if (dirDeegres > 90 && dirDeegres <= 180) {
      this.setDir(180 - dirDeegres);
      var magX = -Math.floor(distance * Math.cos(this.dir)); //the magnitude to move in the X direction
      var magY = -Math.floor(distance * Math.sin(this.dir)); //the magnitude to move in the Y direction
    } else if (dirDeegres > 180 && dirDeegres <= 270) {
      this.setDir(270 - dirDeegres);
      var magX = -Math.floor(distance * Math.sin(this.dir)); //the magnitude to move in the X direction
      var magY = Math.floor(distance * Math.cos(this.dir)); //the magnitude to move in the Y direction
    } else if (dirDeegres > 270 && dirDeegres <= 360) {
      this.setDir(360 - dirDeegres);
      var magX = Math.floor(distance * Math.cos(this.dir)); //the magnitude to move in the X direction
      var magY = Math.floor(distance * Math.sin(this.dir)); //the magnitude to move in the Y direction
    }
    this.setDir(dirDeegres);

    this.x += magX;
    this.y += magY;
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  };

  //moves the walker to a new absolute position denoted by (newX, newY)
  this.moveTo = function(newX, newY) {
    this.x = newX;
    this.y = newY;
    ctx.moveTo(this.x, this.y);
  };

  //draws a line from the current walker position to the absolute position denoted by (newX, newY)
  this.drawTo = function(newX, newY) {
    this.x = newX;
    this.y = newY;
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  };

  //draws a circle of a certain radius and the center of it will be the position
  //of the walker
  this.drawCircle = function(radius) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    //drawing the cirle moves the current context's coordinates so we need to
    //restore them
    ctx.moveTo(this.x, this.y);
  };
};
