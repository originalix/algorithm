import { StdIn } from '@/utils'
import ST from '@/algs4/search/binary-search-st'
import Graph from './graph'

export default class SymbolGraph {
  private st: ST<string, number>
  private keys: string[]
  private G: Graph

  constructor(stream: string[], sp: string) {
    this.st = new ST()
    for (const line of stream) {
      const a = line.split(sp)
      for (let i = 0; i < a.length; i++) {
        if (!this.st.contains(a[i])) {
          this.st.put(a[i], this.st.size())
        }
      }
    }
    this.keys = []
    for (const name of this.st.getKeys()) {
      this.keys[this.st.get(name)] = name
    }
    this.G = new Graph(this.st.size())
    for (const line of stream) {
      const a = line.split(sp)
      const v = this.st.get(a[0])
      for (let i = 1; i < a.length; i++) {
        this.G.addEdge(v, this.st.get(a[i]))
      }
    }
  }

  contains(s: string): boolean {
    return this.st.contains(s)
  }
  index(s: string): number {
    return this.st.get(s)
  }
  name(v: number): string {
    return this.keys[v]
  }
  getG(): Graph {
    return this.G
  }
}
