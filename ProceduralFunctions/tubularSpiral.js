procFunc.TubularSpiral = {
  func: function() {
    walker.moveTo(mCanvas.width / 2, mCanvas.height / 2);
    var i = 0; //100 steps
    walker.setDir(450);
    while (i < 1000) {
      walker.walk(10);
      walker.setDir(walker.getDir() + i);
      i += 1;
    }
  },
  name: 'TubularSpiral'
};
