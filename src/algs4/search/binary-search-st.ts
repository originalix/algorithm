/**
 * 二分查找（基于有序数组）
 */
export default class BinarySearchST<Key, Value> {
  private keys: Key[]
  private vals: Value[]
  private N: number

  constructor() {
    this.keys = []
    this.vals = []
    this.N = 0
  }

  size(): number { return this.N }

  isEmpty(): boolean { return this.N === 0 }

  contains(key: Key) {
    return this.get(key) != null
  }

  getKeys() { return this.keys }

  get(key: Key): Value | null {
    if (this.isEmpty()) return null
    const i = this.rank(key, 0, this.N - 1)
    if (i < this.N && this.keys[i] === key) {
      return this.vals[i]
    } else {
      return null
    }
  }

  // 查找键，找到则更新值，否则创建新的元素:w
  put(key: Key, val: Value) {
    const i = this.rank(key, 0, this.N - 1)
    if (i < this.N && this.keys[i] === key) {
      this.vals[i] = val
      return
    }
    for (let j = this.N; j > i; j--) {
      this.keys[j] = this.keys[j - 1]
      this.vals[j] = this.vals[j - 1]
    }
    this.keys[i] = key
    this.vals[i] = val
    this.N++
  }

  rank(key: Key, lo: number, hi: number): number {
    if (hi < lo) return lo
    const mid = Math.floor(lo + (hi - lo) / 2)
    if (key < this.keys[mid]) {
      return this.rank(key, lo, mid - 1)
    } else if (key > this.keys[mid]) {
      return this.rank(key, mid + 1, hi)
    } else {
      return mid
    }
  }
}
