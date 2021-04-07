import Bag from '../1-3/bag'
import Digraph from './digraph'

/**
 * 有向图的可达性
 *
 * 在有向图中，深度优先搜索标记由一个集合的顶点可达的所有顶点
 */
export default class DirectedDFS {
  private marked: boolean[]

  constructor(G: Digraph, s: number | Bag<number>) {
    this.marked = []
    if (typeof s === 'number') {
      this.dfs(G, s)
    } else {
      while (s.hasNext()) {
        const v = s.next()
        if (!this.marked[v]) this.dfs(G, v)
      }
    }
  }

  dfs(G: Digraph, v: number) {
    this.marked[v] = true
    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const w = adj.next()
      if (!this.marked[w]) this.dfs(G, w)
    }
  }

  isMarked(v: number) {
    return this.marked[v]
  }
}
