/**
 * 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
 * @param {*} num
 */
// 直接使用十进制转换
function parse2Int(num) {
  return parseInt(num, 10);
}

// 正则方法 在字符串情况下报错 有瑕疵
function parse2IntReg(num) {
  return parseInt(num.match(/^(\d+)/)[0], 10);
}

console.log(parse2Int('abb'));
console.log(parse2Int('12px'));
console.log(parse2IntReg('122px'));
console.log(parse2IntReg('abb'));
