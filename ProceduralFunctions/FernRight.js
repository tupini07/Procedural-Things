procFunc.FernRight = {
  func: function() {
    var walker = new Walker(mCanvas.width / 10, mCanvas.height );

    //each segment produces 2 outshoots for a limited number of steps (depth)
    //one outshoot is another segment going in the same direction as original
    //and the other goes in original_direction - difference.
    var recFunc = function(pos_parent, dist, dir, depth){
      if(depth === 0){
        return;
      }else{
        walker.setPos(pos_parent[0], pos_parent[1]);
        walker.setDir(dir-5);
        walker.drawCircle(2);
        walker.walk(dist * 7/8);
        var posP1 = walker.getPos();

        walker.setPos(pos_parent[0], pos_parent[1]);
        walker.setDir(dir - 30);
        walker.walk(dist  * 3/4);
        var posP2 = walker.getPos();

        recFunc(posP1, dist * 7/8, dir - 5, depth-1);
        recFunc(posP2, dist * 3/4, dir - 30, depth-1);
      }
    };

    recFunc(walker.getPos(), 100, 80, 8);
    delete walker;
  },
  name: 'FernRight'
};
