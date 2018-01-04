var arrayreturned = /** @class */ (function () {
    function arrayreturned(na) {
        this.$result = na;
    }
    arrayreturned.prototype.av = function () {
        return new Array("Mary", "Tom", "Jacki");
    };
    return arrayreturned;
}());
var arryobjec = new arrayreturned('ddd');
console.log(arryobjec.$result);
var num = arryobjec.av();
for (var s in num) {
    console.log(num[s]);
}
