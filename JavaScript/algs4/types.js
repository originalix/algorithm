"use strict";
exports.__esModule = true;
var NodeItem = /** @class */ (function () {
    function NodeItem() {
    }
    return NodeItem;
}());
exports.NodeItem = NodeItem;
var NodeIterator = /** @class */ (function () {
    function NodeIterator() {
    }
    NodeIterator.prototype.setCurrent = function (first) {
        this.current = first;
    };
    NodeIterator.prototype.hasNext = function () {
        return this.current !== null;
    };
    NodeIterator.prototype.remove = function () { };
    NodeIterator.prototype.next = function () {
        var item = this.current.item;
        this.current = this.current.next;
        return item;
    };
    return NodeIterator;
}());
exports.NodeIterator = NodeIterator;
