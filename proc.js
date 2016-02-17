var procFunc = {}; //global object to hold all procedural functions
var mCanvas = document.getElementById("mCanvas"); //the canvas element
var ctx = mCanvas.getContext("2d"); //2Dimensional global context

angular.module('procApp', []).controller('ProceduralController', function() {
    var proc = this;
    window.onload = function(){
      procFunc.simpleSpiral();
    };
    
});
