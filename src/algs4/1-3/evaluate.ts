/**
 * (1 + ((2 + 3) * (4 * 5)))
 * Dijkstra 的双栈算术表达式求值算法
 */
export default class Evaluate {
  static main(args: string) {
    const ops: string[] = []
    const vals: number[] = []

    for (let i = 0; i < args.length; i++) {
      const char = args.charAt(i)
      if (char.match(/\s/)) continue
      if (char === '(') continue
      if (['+', '-', '*', '/'].includes(char)) {
        ops.push(char)
      } else if (char === ')') {
        const op = ops.pop()
        let v = vals.pop()
        if (op === '+') v = vals.pop() + v
        if (op === '-') v = vals.pop() - v
        if (op === '*') v = vals.pop() * v
        if (op === '/') v = vals.pop() / v
        vals.push(v)
      } else {
        vals.push(parseFloat(char))
      }
    }

    return vals.pop()
  }
}
