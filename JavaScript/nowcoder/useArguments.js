/**
 * 函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
 */
function useArguments() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

// Slice + join + eval方法
function useArgumentsSlice() {
  var arr = Array.prototype.slice.call(arguments);
  return eval(arr.join('+'));
}

// reduce方法
function useArgumentsReduce() {
  return Array.prototype.reduce.call(arguments, function(prev, curr) { return prev + curr; });
}

// var res = useArgumentsSlice(1, 2, 3, 4);
var res = useArgumentsReduce(1, 2, 3, 4);
console.log(res);
