(function () {

var paper = Raphael(10, 50, 320, 200);

// (10, 20) へ移動
// (30, 40) へ線をひく
// (10, 40) へ線をひく
// (10, 20) へ線をひく
var path = paper.path("M 10 20  L 30 40  L 10 40  L 10 20");
path.attr('stroke',"#000");
})();
