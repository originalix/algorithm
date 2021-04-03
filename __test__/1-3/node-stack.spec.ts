import { StdIn, StopWatch } from '../../src/utils'
import { TinyIntFile } from '../../src/constants'
import Stack from '../../src/algs4/1-3/node-stack'

describe('Stack 下压栈测试', () => {
  test('stack push and pop', async () => {
    const time = new StopWatch()
    const val = await StdIn.readInt(TinyIntFile)
    const stack = new Stack<number>()
    for (const v of val) {
      stack.push(v)
    }

    expect(stack.size()).toBe(val.length)

    while (!stack.isEmpty()) {
      stack.pop()
    }
    time.elapseTime()

    expect(stack.size()).toBe(0)
  })
})
