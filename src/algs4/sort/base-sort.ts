import { ISort } from '@/types'
import assert = require('assert')

abstract class BaseSort<T> implements ISort<T> {
  protected array: T[]

  constructor(array: T[]) {
    this.array = array
  }

  abstract sort(array?: T[]): void

  less(v: T, w: T): boolean {
    return v < w
  }

  exch(i: number, j: number) {
    const temp = this.array[i]
    this.array[i] = this.array[j]
    this.array[j] = temp
  }

  show(): void {
    console.log(this.array)
  }

  isSorted(): boolean {
    for (let i = 1; i < this.array.length; i++) {
      if (this.less(this.array[i], this.array[i - 1])) return false
    }
    return true
  }

  main(passArray?: boolean) {
    passArray ? this.sort(this.array) : this.sort()
    assert(this.isSorted(), '数组排序错误')
    this.show()
  }
}

export default BaseSort
