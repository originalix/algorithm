import Digraph from './digraph'
import DepthFirstOrder from './depth-first-order'

/**
 * 计算强连通分量的 Kosaraju 算法
 *
 * 给定的两个顶点是强连通的吗？这幅有向图中含有多少个强连通分量
 */
export default class KosarajuSCC {
  private marked: boolean[]
  private id: number[]
  private count: number

  constructor(G: Digraph) {
    this.marked = []
    this.id = []
    const order = new DepthFirstOrder(G.reverse())
    const reversePost = order.getReversePost()
    while (!reversePost.isEmpty()) {
      const s = reversePost.pop()
      if (!this.marked[s]) {
        this.dfs(G, s)
        this.count++
      }
    }
  }

  private dfs(G: Digraph, v: number) {
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

  stronglyConnected(v: number, w: number) { return this.id[v] === this.id[w] }

  getId(v: number) { return this.id[v] }

  getCount() { return this.count }
}
