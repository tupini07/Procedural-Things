var procFunc = {}; //global object to hold all procedural functions
var mCanvas = document.getElementById("mCanvas"); //the canvas element
var ctx = mCanvas.getContext("2d"); //2Dimensional global context

angular.module('procApp', []).controller('ProceduralController', function() {
  var proc = this;
  proc.animdelay = 20; //default speed

  proc.updateIm = function(item, animdelay) {
    mCanvas.width = mCanvas.width;
    setTimeout(function () {
      procFunc[item].func(animdelay);
    }, 10);
  };

  proc.procFuncs = procFunc;
});
