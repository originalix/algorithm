import { IStack } from '@/types'
import { NodeItem } from '@/algs4/1-3/node-item'

/**
 * 下压栈(链表实现)
 */
export default class Stack<T> implements IStack<T> {
  private first: NodeItem<T>
  private N: number

  constructor() {
    this.N = 0
  }

  isEmpty(): boolean {
    return this.N === 0
  }

  size(): number {
    return this.N
  }

  push(item: T) {
    const oldFirst = this.first
    this.first = new NodeItem<T>()
    this.first.item = item
    this.first.next = oldFirst
    this.N++
  }

  pop(): T {
    const item = this.first.item
    this.first = this.first.next
    this.N--
    return item
  }
}
