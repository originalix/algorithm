const fs = require('fs')
const path = require('path')
const readline = require('readline')

const readlineStack: any[] = []

export default class StdIn {
  static isEmpty(): boolean {
    return readlineStack.length === 0
  }

  static async processLine(type: 'string' | 'number', fileName: string | null) {
    const fromFile = !!fileName
    const filePath = fromFile ? path.resolve(__dirname, `../src/mock/${fileName}`) : null
    const fileStream = fs.createReadStream(filePath)
    const rl = readline.createInterface({
      input: fromFile ? fileStream : process.stdin,
      crlfDelay: Infinity
    })
    readlineStack.length = 0
    for await (const line of rl) {
      readlineStack.push(type === 'number' ? Number(line) as number : line as string)
    }
  }

  static async readFile(fileName: string = null) {
    await this.processLine('string', fileName || null)
    return readlineStack
  }

  static readString() {
    return this.isEmpty() ? '' : readlineStack.shift()
  }

  static async readInt(fileName: string): Promise<number[]> {
    await this.processLine('number', fileName)
    return readlineStack
  }
}
