/*global d3: false */

(function() {
    'use strict';

    var dataset = [];                                    // 配列の宣言と初期化
    for (var i = 0; i < 25; i++) {                       // ループを25回繰り返す
        var newNumber = Math.round(Math.random() * 30);  // 0～30のランダムな数を生成
        dataset.push(newNumber);                         // 生成した数を配列に追加
    }

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", function(d) {
          return (d * 5) + "px";
      });
})();
