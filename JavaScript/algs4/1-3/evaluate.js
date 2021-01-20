// (1 + ((2 + 3) * (4 * 5)))

// Dijkstra 的双栈算术表达式求值算法
class Evaluate {
  static main(args) {
    const ops = []
    const vals = []

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

    console.log(vals.pop())
  }
}

const formula = '(1 + ((2 + 3) * (4 * 5)))'
Evaluate.main(formula)
