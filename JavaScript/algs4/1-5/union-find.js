"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var UF = /** @class */ (function () {
    function UF(N) {
        this._count = N;
        this.id = [];
        this.sz = [];
        for (var i = 0; i < N; i++) {
            this.id[i] = i;
            this.sz[i] = 1;
        }
    }
    UF.prototype.count = function () { return this._count; };
    UF.prototype.showTree = function () { return this.id; };
    UF.prototype.connected = function (p, q) {
        return this.find(p) === this.find(q);
    };
    UF.prototype.find = function (p) {
        // 跟随链接找到根节点
        while (p != this.id[p])
            p = this.id[p];
        return p;
    };
    UF.prototype.union = function (p, q) {
        var i = this.find(p);
        var j = this.find(q);
        if (i === j)
            return;
        if (this.sz[i] < this.sz[j]) {
            this.id[i] = j;
            this.sz[j] += this.sz[i];
        }
        else {
            this.id[j] = i;
            this.sz[i] += this.sz[j];
        }
        this._count--;
    };
    return UF;
}());
function test() {
    var UnionCount = 1000000;
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
