import Bag from '../1-3/bag'
import Edge from './edge'

/**
 * 加权无向图的数据类型
 *
 */
export default class EdgeWeightedGraph {
  private V: number
  private E: number
  private adj: Bag<Edge>[]

  constructor(V: number, readIn?: number[]) {
    this.V = V
    this.E = 0
    this.adj = []
    for (let v = 0; v < V; v++) {
      this.adj[v] = new Bag<Edge>()
    }

    if (readIn) {
      while (readIn.length) {
        const v = readIn.shift()
        const w = readIn.shift()
        const weight = readIn.shift()
        const e = new Edge(v, w, weight)
        this.addEdge(e)
      }
    }
  }

  getV() {
    return this.V
  }

  getE() {
    return this.E
  }

  addEdge(e: Edge) {
    const v = e.either()
    const w = e.other(v)
    this.adj[v].add(e)
    this.adj[w].add(e)
    this.E++
  }

  getAdj(v: number) {
    return this.adj[v]
  }

  edges() {
    const b = new Bag<Edge>()
    for (let v = 0; v < this.V; v++) {
      const adj = this.getAdj(v)
      while (adj.hasNext()) {
        const e = adj.next()
        if (e.other(v) > v) b.add(e)
      }
    }
    return b
  }
}
