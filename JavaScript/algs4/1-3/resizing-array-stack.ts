class ResizingArrayStack<T> {
  private a: T[]
  private N: number
  constructor() {
    this.a = new Array(1)
    this.N = 0
  }
  isEmpty(): boolean { return this.N === 0 }
  size(): number { return this.N }
  private resize(max: number) {
    const temp: T[] = new Array(max)
    for (let i = 0; i < this.N; i++) {
      temp[i] = this.a[i]
    }
    this.a = temp
  }
  push(item: T) {
    if (this.N === this.a.length) this.resize(2 * this.a.length)
    this.a[this.N++] = item
  }
  pop(): T {
    const item = this.a[--this.N]
    this.a[this.N] = null
    if (this.N > 0 && this.N === this.a.length / 4) {
      this.resize(this.a.length / 2)
    }
    return item
  }
}

const stack = new ResizingArrayStack<Number>()
console.log(`stack should empty: ${stack.isEmpty()}`)
for (let i = 0; i < 10; i++) {
  stack.push(i)
}
console.log(`now stack size is ${stack.size()}`)
while (!stack.isEmpty()) {
  const current = stack.pop()
  console.log(`current item is: ${current}`)
}
console.log(`stack should empty again: ${stack.isEmpty()}`)
