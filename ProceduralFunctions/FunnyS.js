procFunc.FunnyS = {
  func: function(animdelay) {
    var walker = new Walker(mCanvas.width / 2, mCanvas.height / 2);
    var i = 0; //100 steps
    walker.setDir(450);
    loop();
    function loop() {
      window.setTimeout(function() {
        walker.walk(10);
        walker.setDir(walker.getDir() + i);
        i += 1;
        if (i < 500) {
          loop();
        }
      }, animdelay);
    };
  },
  name: 'FunnyS'
};
