"use strict";
exports.__esModule = true;
var StopWatch = /** @class */ (function () {
    function StopWatch() {
        this.startTime = Date.now();
    }
    StopWatch.prototype.elapseTime = function () {
        var currentTime = Date.now();
        console.log("\u5F53\u524D\u7A0B\u5E8F\u8FD0\u884C\u65F6\u95F4 " + (currentTime - this.startTime) / 1000 + "s");
    };
    return StopWatch;
}());
exports["default"] = StopWatch;
