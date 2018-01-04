"use strict";
exports.__esModule = true;
var arraypassedtofunction = /** @class */ (function () {
    function arraypassedtofunction($f) {
        this.$df = $f;
    }
    arraypassedtofunction.prototype.PassData = function ($ff) {
        var s;
        for (s = 0; s < $ff.length; s++) {
            console.log($ff[s]);
        }
    };
    return arraypassedtofunction;
}());
exports.arraypassedtofunction = arraypassedtofunction;
var namess = Array('a', 'b', 'c');
var objarray = new arraypassedtofunction(1);
objarray.PassData(namess);
