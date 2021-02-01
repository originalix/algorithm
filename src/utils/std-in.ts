const readline = require('readline')

const readlineStack: string[] = []

export default class StdIn {
  static isEmpty(): boolean {
    return readlineStack.length === 0
  }

  static async readFile() {
    const rl = readline.createInterface({
      input: process.stdin,
      crlfDelay: Infinity
    })
    readlineStack.length = 0
    for await (const line of rl) {
      readlineStack.push(line)
    }
  }

  static readString() {
    return this.isEmpty() ? '' : readlineStack.shift()
  }
}
