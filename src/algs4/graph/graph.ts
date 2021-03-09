import Bag from '@/algs4/1-3/bag'

interface IGraph {
  countV(): number
  countE(): number
  addEdge(v: number, w: number): void
  getAdj(v: number): Bag<number>
}

export class Graph implements IGraph {
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

  countV() { return this.V }

  countE() { return this.E }

  addEdge(v: number, w: number) {
    this.adj[v].add(w)
    this.adj[w].add(v)
    this.E++
  }

  getAdj(v: number) {
    return this.adj[v]
  }
}