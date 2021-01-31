"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var UF = /** @class */ (function () {
    function UF(N) {
        this._count = N;
        this.id = [];
        for (var i = 0; i < N; i++) {
            this.id[i] = i;
        }
    }
    UF.prototype.showTree = function () { return this.id; };
    UF.prototype.count = function () { return this._count; };
    UF.prototype.connected = function (p, q) {
        return this.find(p) === this.find(q);
    };
    UF.prototype.find = function (p) {
        return this.id[p];
    };
    UF.prototype.union = function (p, q) {
        var pID = this.find(p);
        var qID = this.find(q);
        if (pID === qID)
            return;
        for (var i = 0; i < this.id.length; i++) {
            if (this.id[i] === pID)
                this.id[i] = qID;
        }
        this._count--;
    };
    return UF;
}());
function test() {
    var N = 10;
    var uf = new UF(N);
    for (var i = 0; i < 5; i++) {
        var p = utils_1.readInt(10);
        var q = utils_1.readInt(10);
        if (uf.connected(p, q))
            continue;
        uf.union(p, q);
        console.log(p + ' ' + q);
        console.log(uf.showTree());
        console.log('==================');
    }
    console.log(uf.count() + 'components');
}
test();
