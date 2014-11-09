/*global d3: false */

(function() {
    'use strict';

    /*
    var dataset = [];                                    // 配列の宣言と初期化
    for (var i = 0; i < 25; i++) {                       // ループを25回繰り返す
        var newNumber = Math.round(Math.random() * 30);  // 0～30のランダムな数を生成
        dataset.push(newNumber);                         // 生成した数を配列に追加
    }
     */

    var w = 500;
    var h = 100;
    var barPadding = 1;
    var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
    var svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", function(d, i) {
           return i * (w / dataset.length);
       })
       .attr("y", function(d) {
           return h - (d * 4);
       })
       .attr("width", w / dataset.length - barPadding)
       .attr("height", function(d) {
           return d * 4;
       })
       .attr("fill", function(d) {
           return "rgb(0, 0, " + (d * 10) + ")";
       });
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text(function(d) {
           return d;
       })
       .attr("x", function(d, i) {
           return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
       })
       .attr("y", function(d) {
           return h - (d * 4) + 14;
       })
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "white")
       .attr("text-anchor", "middle");

    /*
    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", function(d) {
          return (d * 5) + "px";
      });
     */

    /*
    var dataset = [5, 10, 15, 20, 25];
    var circles = svg.selectAll("circle")
                     .data(dataset)
                     .enter()
                     .append("circle");
    circles.attr("cx", function(d, i) {
               return (i * 50) + 25;
           })
           .attr("cy", h/2)
           .attr("r", function(d) {
               return d;
           })
           .attr("fill", "yellow")
           .attr("stroke", "orange")
           .attr("stroke-width", function(d) {
               return d/2;
           });

    var numbers = [5, 10, 15, 20, 25];
    for(var i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

    var fruit = {
        kind: "ぶどう",
        color: "赤",
        quantity: 12,
        tasty: true
    };

    var fruits = [
        {
            kind: "ぶどう",
            color: "赤",
            quantity: 12,
            tasty: true
        }, {
            kind: "キウイ",
            color: "茶色",
            quantity: 98,
            tasty: true
        }, {
            kind: "バナナ",
            color: "黄色",
            quantity: 0,
            tasty: true
        }
    ];
    console.log(fruits[1].kind);

    var jsonFruit = {
        "kind": "ぶどう",
        "color": "赤",
        "quantity": 12,
        "tasty": true
    };

    var geodata = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [150.1282427, -24.471803]
                },
                "properties": {
                    "type": "town"
                }
            }
        ]
    };
     */
}());
