(function () {
var paper = Raphael(10, 50, 320, 200);

// 円を書く at x = 50, y = 40,  半径 10
var circle = paper.circle(50, 40, 10);
// 赤色でぬりつぶす
circle.attr("fill", "#e00");

// 黒で境界線をかく
circle.attr("stroke", "#000");

paper = Raphael(10, 240, 320, 200);

circle = paper.circle(50, 40, 40);
circle.attr("fill", "#00e");
circle.attr("stroke", "#000");
})();
