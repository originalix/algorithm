import Evaluate from '@/algs4/1-3/evaluate'

describe('Dijkstra 的双栈算术表达式求值算法', () => {
  test('(1 + ((2 + 3) * (4 * 5))) = 101', () => {
    const formula = '(1 + ((2 + 3) * (4 * 5)))'
    const val = Evaluate.main(formula)
    expect(+val).toBe(101)
  })
})
