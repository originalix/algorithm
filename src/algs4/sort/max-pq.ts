/**
 * 基于堆的优先序列
 */
export default class MaxPQ<T> {
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
