import { NodeItem } from '@/types'

/**
 * 数据结构 背包
 *
 * @export
 * @class Bag
 * @template T
 */
export default class Bag<T> {
  private first: NodeItem<T>
  private N: number

  constructor() {
    this.first = null
    this.N = 0
  }

  isEmpty() {
    return this.first === null
  }

  size() {
    return this.N
  }

  add(item: T) {
    const oldFirst = this.first
    this.first = new NodeItem<T>()
    this.first.item = item
    this.first.next = oldFirst
    this.N++
  }
}
