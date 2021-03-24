import { StdIn } from '@/utils'
import { NodeItem } from '@/types'
import { __DEBUG__ } from '@/constants'

/**
 * 下压栈(链表实现)
 */
export default class Stack<T> {
  private first: NodeItem<T>
  private N: number

  constructor() {
    this.N = 0
  }

  isEmpty(): boolean { return this.N === 0 }

  size(): number { return this.N }

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

async function testNodeStack() {
  await StdIn.readFile()
  const stack = new Stack<string>()

  while (!StdIn.isEmpty()) {
    const str = StdIn.readString()
    stack.push(str)
  }
  console.log(`stack's size is ${stack.size()}`)

  while (!stack.isEmpty()) {
    console.log(`current line: ${stack.pop()}`)
  }
}

__DEBUG__ && testNodeStack()
