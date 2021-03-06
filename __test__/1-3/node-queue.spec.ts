import { StdIn } from '@/utils'
import { TinyIntFile } from '@/constants'
import Queue from '@/algs4/1-3/node-queue'

describe('Queue 队列', () => {
  test('queue enqueue and dequeue', async () => {
    const val = await StdIn.readInt(TinyIntFile)
    const queue = new Queue<number>()
    for (const v of val) {
      queue.enqueue(v)
    }
    expect(queue.size()).toBe(val.length)

    while (!queue.isEmpty()) {
      queue.dequeue()
    }

    expect(queue.size()).toBe(0)
  })
})
