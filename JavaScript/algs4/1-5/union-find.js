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
    UF.prototype.count = function () { return this._count; };
    UF.prototype.connected = function (p, q) {
        return this.find(p) === this.find(q);
    };
    UF.prototype.find = function (p) {
        while (p != this.id[p])
            p = this.id[p];
        return p;
    };
    UF.prototype.union = function (p, q) {
        var pRoot = this.find(p);
        var qRoot = this.find(q);
        if (pRoot === qRoot)
            return;
        this.id[pRoot] = qRoot;
        this._count--;
    };
    return UF;
}());
function test() {
    var UnionCount = 200000;
    var time = new utils_1.StopWatch();
    var N = UnionCount;
    var uf = new UF(N);
    for (var i = 0; i < UnionCount; i++) {
        var p = utils_1.readInt(UnionCount);
        var q = utils_1.readInt(UnionCount);
        if (uf.connected(p, q))
            continue;
        uf.union(p, q);
        console.log(p + ' ' + q);
    }
    console.log(uf.count() + 'components');
    time.elapseTime();
}
test();
