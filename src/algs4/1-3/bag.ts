import { __DEBUG__ } from '@/constants'
import { NodeItem, NodeIterator } from '@/types'

/**
 * 数据结构 背包
 *
 * @export
 * @class Bag
 * @template T
 */
export default class Bag<T> extends NodeIterator<T> {
  private first: NodeItem<T>
  private N: number

  constructor() {
    super()
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
    this.setCurrent(this.first)
  }
}

function main() {
  const val = [1, 3, 3, 4, 5, 6, 7, 8, 9, 4, 3, 5234, 234, 234, 234, 234, 234, 234]
  const bag = new Bag<number>()
  for (const v of val) {
    bag.add(v)
  }
  console.log(`背包内元素数量: ${bag.size()}`)

  while (bag.hasNext()) {
    const element = bag.next()
    console.log(`元素遍历: ${element}`)
  }
}

__DEBUG__ && main()
