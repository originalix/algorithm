import { NodeItem } from '../types'
const StdIn = require('../utils/std-in')

class Queue<T> {
  public first: NodeItem<T>
  public last: NodeItem<T>
  private N: number

  constructor() {
    this.N = 0
    this.first = null
    this.last = null
  }

  isEmpty(): boolean { return this.N === 0 }
  size(): number { return this.N }

  enqueue(item: T) {
    const oldLast = this.last
    this.last = new NodeItem<T>()
    this.last.item = item
    this.last.next = null
    if (this.isEmpty()) {
      this.first = this.last
    } else {
      oldLast.next = this.last
    }
    this.N++
  }

  dequeue(): T {
    const item = this.first.item
    this.first = this.first.next
    if (this.isEmpty()) {
      this.last = null
    }
    this.N--
    return item
  }
}

async function testNodeQueue() {
  await StdIn.readFile()
  const queue = new Queue<string>()

  while (!StdIn.isEmpty()) {
    const str = StdIn.readString()
    if (str !== '-') {
      queue.enqueue(str)
    } else if (!queue.isEmpty()){
      console.log(`${queue.dequeue()} `)
    }
  }
  console.log(`queue's size is ${queue.size()}`)

  while (!queue.isEmpty()) {
    console.log(`current line: ${queue.dequeue()}`)
  }
}

testNodeQueue()
