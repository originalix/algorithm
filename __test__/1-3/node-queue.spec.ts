import { StdIn, StopWatch } from '../../src/utils'
import { TinyIntFile } from '../../src/constants'
import Queue from '../../src/algs4/1-3/node-queue'

describe('Queue 队列测试', () => {
  test('queue enqueue and dequeue', async () => {
    const time = new StopWatch()
    const val = await StdIn.readInt(TinyIntFile)
    const queue = new Queue<number>()
    for (const v of val) {
      queue.enqueue(v)
    }
    expect(queue.size()).toBe(val.length)

    while (!queue.isEmpty()) {
      queue.dequeue()
    }
    time.elapseTime()

    expect(queue.size()).toBe(0)
  })
})
