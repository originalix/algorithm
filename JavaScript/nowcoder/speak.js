/**
 * 将函数 fn 的执行上下文改为 obj 对象
 * @param {*} fn
 * @param {*} obj
 */
// 使用apply
function speak(fn, obj) {
  return fn.apply(obj, obj);
}

// 直接继承关系
function speakStupid(fn, obj) {
  obj.fn = fn;
  return obj.fn();
}

// call 方法
function speakCall(fn, obj) {
  return fn.call(obj);
}

// bind方法
function speakBind(fn, obj) {
  return fn.bind(obj)();
}

var a = speakCall(function() {
  return this.greeting + ', ' + this.name + '!!!';
}, {
  greeting: 'Hello',
  name: 'Rebecca'
});

console.log(a);
