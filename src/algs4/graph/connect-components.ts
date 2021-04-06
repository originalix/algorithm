import Graph from './graph'

/**
 * 连通分量
 */
export default class CC {
  private marked: boolean[]
  private id: number[]
  private count: number

  constructor(G: Graph) {
    this.marked = []
    this.id = []
    this.count = 0

    for (let s = 0; s < G.countV(); s++) {
      if (!this.marked[s]) {
        this.dfs(G, s)
        this.count++
      }
    }
  }

  dfs(G: Graph, v: number) {
    this.marked[v] = true
    this.id[v] = this.count

    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const w = adj.next()
      if (!this.marked[w]) {
        this.dfs(G, w)
      }
    }
  }

  connected(v: number, w: number) {
    return this.id[v] === this.id[w]
  }

  getCount() {
    return this.count
  }

  getId(v: number) {
    return this.id[v]
  }
}
