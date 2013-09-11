(function () {

var paper = Raphael(10, 50, 320, 200);

var circle = paper.circle(50, 40, 10);
circle.attr("fill", "#e00");
circle.attr("stroke", "#000");

// 2000ms かけて x座標 320 まで移動
circle.animate({'cx': 320}, 2000);

})();
