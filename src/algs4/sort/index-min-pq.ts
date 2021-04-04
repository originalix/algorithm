/**
 * 索引优先队列
 */
export default class IndexMinPQ<K> {
  private pq: number[]
  private qp: number[]
  private keys: K[]
  private N: number

  constructor() {
    this.pq = []
    this.qp = []
    this.keys = []
    this.N = 0
    for (let i = 0; i < 100; i++) {
      this.qp[i] = -1
    }
  }

  isEmpty(): boolean { return this.N === 0 }

  size(): number { return this.N }

  contains(i: number) { return this.qp[i] !== -1 }

  insert(i: number, key: K) {
    this.N++
    this.qp[i] = this.N
    this.pq[this.N] = i
    this.keys[i] = key
    this.swim(this.N)
  }

  minKey() {
    return this.keys[this.pq[1]]
  }

  keyOf(i :number) {
    return this.keys[i]
  }

  delMin(): number {
    const min = this.pq[1]
    this.exch(1, this.N--)
    this.sink(1)
    this.qp[min] = -1
    this.keys[min] = null
    this.pq[this.N + 1] = -1
    return min
  }

  private changeKey(i: number, key: K) {
    this.keys[i] = key
    this.swim(this.qp[i])
    this.sink(this.qp[i])
  }

  change(i: number, key: K) {
    this.changeKey(i, key)
  }

  private exch(i: number, j: number) {
    const swap = this.pq[i]
    this.pq[i] = this.pq[j]
    this.pq[j] = swap
    this.qp[this.pq[i]] = i
    this.qp[this.pq[j]] = j
  }

  private greater(i: number, j: number) {
    return this.keys[this.pq[i]] > this.keys[this.pq[j]]
  }

  private swim(k: number) {
    while (k > 1 && this.greater(Math.floor(k / 2), k)) {
      this.exch(Math.floor(k / 2), k)
      k = Math.floor(k / 2)
    }
  }

  private sink(dad: number) {
    while (2 * dad <= this.N) {
      let son = 2 * dad
      if (son < this.N && this.greater(son, son + 1)) son++
      if (!this.greater(dad, son)) break
      this.exch(dad, son)
      dad = son
    }
  }
}
