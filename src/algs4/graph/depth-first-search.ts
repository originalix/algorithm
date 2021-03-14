import Graph from './graph'

export default class DepthFirstSearch {
  private marked: boolean[]
  private count: number

  constructor(G: Graph, s: number) {
    this.marked = []
    this.count = 0
    this.dfs(G, s)
  }

  private dfs(G: Graph, v: number) {
    this.marked[v] = true
    this.count++

    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const w = adj.next()
      if (!this.marked[w]) this.dfs(G, w)
    }
  }

  isMarked(w: number): boolean { return this.marked[w] }

  getCount(): number { return this.count }
}
