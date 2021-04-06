import { StdIn } from '@/utils'
import { TinyIntFile } from '@/constants'
import Stack from '@/algs4/1-3/node-stack'

describe('Stack 下压栈', () => {
  test('stack push and pop', async () => {
    const val = await StdIn.readInt(TinyIntFile)
    const stack = new Stack<number>()
    for (const v of val) {
      stack.push(v)
    }

    expect(stack.size()).toBe(val.length)

    while (!stack.isEmpty()) {
      stack.pop()
    }

    expect(stack.size()).toBe(0)
  })
})
