import Bag from '@/algs4/1-3/bag'

/**
 * 有向图
 * 注释参考无向图
 */
export default class Digraph {
  private V: number
  private E: number
  private adj: Bag<number>[]

  constructor(V: number)
  constructor(V: number, readIn: number[])
  constructor(V?: never, readIn?: never[]) {
    this.V = V
    this.E = 0
    this.adj = []
    for (let v = 0; v < V; v++) {
      this.adj[v] = new Bag<number>()
    }

    while (readIn && readIn.length) {
      const v = readIn.shift()
      const w = readIn.shift()
      this.addEdge(v, w)
    }
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
