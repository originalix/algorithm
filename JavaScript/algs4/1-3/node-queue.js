"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var types_1 = require("../types");
var stop_watch_1 = require("../utils/stop-watch");
var StdIn = require('../utils/std-in');
/**
 * 先进先出队列（链表实现）
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this.N = 0;
        this.first = null;
        this.last = null;
    }
    Queue.prototype.isEmpty = function () { return this.N === 0; };
    Queue.prototype.size = function () { return this.N; };
    Queue.prototype.enqueue = function (item) {
        var oldLast = this.last;
        this.last = new types_1.NodeItem();
        this.last.item = item;
        this.last.next = null;
        if (this.isEmpty()) {
            this.first = this.last;
        }
        else {
            oldLast.next = this.last;
        }
        this.N++;
    };
    Queue.prototype.dequeue = function () {
        var item = this.first.item;
        this.first = this.first.next;
        if (this.isEmpty()) {
            this.last = null;
        }
        this.N--;
        return item;
    };
    return Queue;
}());
function testNodeQueue() {
    return __awaiter(this, void 0, void 0, function () {
        var time, queue, str;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    time = new stop_watch_1["default"]();
                    return [4 /*yield*/, StdIn.readFile()];
                case 1:
                    _a.sent();
                    queue = new Queue();
                    while (!StdIn.isEmpty()) {
                        str = StdIn.readString();
                        if (str !== '-') {
                            queue.enqueue(str);
                        }
                        else if (!queue.isEmpty()) {
                            console.log(queue.dequeue() + " ");
                        }
                    }
                    console.log("queue's size is " + queue.size());
                    while (!queue.isEmpty()) {
                        console.log("current line: " + queue.dequeue());
                    }
                    time.elapseTime();
                    return [2 /*return*/];
            }
        });
    });
}
testNodeQueue();
