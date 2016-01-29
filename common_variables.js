/**
 * Created by liwang on 1/29/16.
 */

    var color_quality =
            d3.scale.ordinal().range([
//        "202020",
                "303030",
//        "404040",
                "505050",
//        "606060",
                "707070",
//        "808080",
                "909090",
//        "a0a0a0",
                "b0b0b0",
//        "c0c0c0",
                "d0d0d0",
//        "e0e0e0",
                "f0f0f0"].reverse());
var color_factor = d3.scale.category20b();

var margin = {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    },
    width = 1640 - margin.left - margin.right,//the width of the streamgraph
    height = 600 - margin.top - margin.bottom,//the height of the streamgraph
    radius = 80,
    m, n,
    displaymax = 200;

var up = true;//mouse state
var downx = 0;//mouse down x coordinate
var downy = 0;//mouse down y coordiante
var current_dataset;//
var index0, index1;//drag result, starts at index0, ends at index1
var index_arr;//store the drag history
var paths, donut_svgs;

var factors;
var file = "wine_red.csv";
var dsv = d3.dsv(";", "text/plain");
var opacity = .6;
var opacity_rect = .15;
var dataset, layers;

var drag_history;
var rect,//the drag rectangle
    x, y, area;