import { StdIn, StopWatch } from 'utils'
import { SortMockFile, __DEBUG__ } from '@/constants'
/**
 * 基于堆的优先序列
 */
class MaxPQ<T> {
  private pq: T[]
  private N: number

  constructor() {
    this.pq = []
    this.N = 0
  }

  isEmpty(): boolean { return this.N === 0 }

  size(): number { return this.N }

  insert(v: T) {
    this.pq[++this.N] = v
    this.swim(this.N)
  }

  delMax(): T {
    const max = this.pq[1]
    this.exch(1, this.N--)
    this.pq[this.N + 1] = null
    this.sink(1)
    return max
  }

  private exch(i: number, j: number) {
    const temp = this.pq[i]
    this.pq[i] = this.pq[j]
    this.pq[j] = temp
  }

  private less(i: number, j: number) {
    return this.pq[i] < this.pq[j]
  }

  private swim(k: number) {
    while (k > 1 && this.less(Math.floor(k / 2), k)) {
      this.exch(Math.floor(k / 2), k)
      k = Math.floor(k / 2)
    }
  }

  private sink(dad: number) {
    while (2 * dad <= this.N) {
      let son = 2 * dad
      if (son < this.N && this.less(son, son + 1)) son++
      if (!this.less(dad, son)) break
      this.exch(dad, son)
      dad = son
    }
  }
}

async function main() {
  const data = await StdIn.readInt(SortMockFile)
  const stopWatch = new StopWatch()
  const res = []
  const maxPQ = new MaxPQ()
  for (let i = 0; i < data.length; i++) {
    maxPQ.insert(data[i])
  }
  while (!maxPQ.isEmpty()) {
    res.push(maxPQ.delMax())
  }
  console.log(res)
  stopWatch.elapseTime()
}

__DEBUG__ && main()
