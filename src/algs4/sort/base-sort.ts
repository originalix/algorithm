const assert = require('assert')

abstract class BaseSort<T> {
  protected array: T[]

  constructor(array: T[]) {
    this.array = array
  }

  abstract sort(): void

  protected less(v: T, w: T): boolean {
    return v < w
  }

  protected exch(i: number, j:number) {
    const temp = this.array[i]
    this.array[i] = this.array[j]
    this.array[j] = temp
  }

  show(): void {
    console.log(this.array)
  }

  protected isSorted(): boolean {
    for (let i = 1; i < this.array.length; i++) {
      if (this.less(this.array[i], this.array[i - 1])) return false
    }
    return true
  }

  main() {
    this.sort()
    assert(this.isSorted(), '数组排序错误')
    this.show()
  }
}

export default BaseSort
