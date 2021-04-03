import { StdIn, StopWatch } from '../src/utils'
import { TinyIntFile } from '../src/constants'
import Queue from '../src/algs4/1-3/node-queue'

describe('Queue 队列测试', () => {
  const time = new StopWatch()
  let val: number[]
  let queue: Queue<number> | null
  beforeAll(async () => {
    val = await StdIn.readInt(TinyIntFile)
    queue = new Queue<number>()
  })

  test('queue enqueue and dequeue', () => {
    for (const v of val) {
      queue.enqueue(v)
    }
    expect(queue.size()).toBe(val.length)

    while (!queue.isEmpty()) {
      queue.dequeue()
    }

    expect(queue.size()).toBe(0)

    time.elapseTime()
  })
})
