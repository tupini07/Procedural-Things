procFunc.FunnyS = {
  func: function() {
    walker.moveTo(mCanvas.width / 2, mCanvas.height / 2);
    var i = 0; //100 steps
    walker.setDir(450);
    while (i < 500) {
      walker.walk(10);
      walker.setDir(walker.getDir() + i);
      i += 1;
    }
  },
  name: 'FunnyS'
};