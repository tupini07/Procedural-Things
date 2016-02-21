procFunc.FernRight = {
  func: function() {
    var walker = new Walker(mCanvas.width / 2, mCanvas.height / 2);
    walker.drawCircle(10);
    walker.setDir(90);
    walker.walk(100);
    delete walker;
  },
  name: 'FernRight'
};
