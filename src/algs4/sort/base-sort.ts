const assert = require('assert')

abstract class BaseSort {
  public static sort(a: number[]): void {}

  protected static less(v: number, w: number): boolean {
    return v < w
  }

  protected static exch(a: number[], i: number, j:number) {
    const temp = a[i]
    a[i] = a[j]
    a[j] = temp
  }

  public static show(a: number[]): void {
    console.log(a)
  }

  protected static isSorted(a: number[]): boolean {
    for (let i = 1; i < a.length; i++) {
      if (this.less(a[i], a[i - 1])) return false
    }
    return true
  }

  public static main(a: number[]) {
    this.sort(a)
    assert(this.isSorted(a), '数组排序错误')
    this.show(a)
  }
}

export default BaseSort
