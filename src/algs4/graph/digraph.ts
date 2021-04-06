import { StdIn } from '@/utils'
import { __DEBUG__ } from '@/constants'
import Bag from '@/algs4/1-3/bag'

/**
 * 有向图
 * 注释参考无向图
 */
export default class Digraph {
  private V: number
  private E: number
  private adj: Bag<number>[]

  constructor(V: number) {
    this.V = V
    this.E = 0
    this.adj = []
    for (let v = 0; v < V; v++) {
      this.adj[v] = new Bag<number>()
    }
  }

  static createByReadIn(V: number, readIn: number[]) {
    const digraph = new Digraph(V)
    while (readIn.length) {
      const v = readIn.shift()
      const w = readIn.shift()
      digraph.addEdge(v, w)
    }
    return digraph
  }

  countV() {
    return this.V
  }

  countE() {
    return this.E
  }

  addEdge(v: number, w: number) {
    this.adj[v].add(w)
    this.E++
  }

  getAdj(v: number) {
    return this.adj[v]
  }

  reverse(): Digraph {
    const R = new Digraph(this.V)
    for (let v = 0; v < this.V; v++) {
      const adj = this.getAdj(v)
      while (adj.hasNext()) {
        const w = adj.next()
        R.addEdge(w, v)
      }
    }
    return R
  }
}

async function main() {
  const stream = await StdIn.readFile('tinyDG.txt')
  const data = stream.reduce((prev, line) => [...prev, ...line.split(' ')], []).map((val: string) => +val)
  console.log(data)

  const G = Digraph.createByReadIn(13, data)
  console.log(G)
}

__DEBUG__ && main()
