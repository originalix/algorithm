import Queue from '../1-3/node-queue'
import Stack from '../1-3/node-stack'
import Digraph from './digraph'
import EdgeWeightedDigraph from './edge-weighted-digraph'

/**
 * 有向图中基于深度优先搜索的顶点排序
 */
export default class DepthFirshOrder {
  private marked: boolean[]
  private pre: Queue<number> // 所有顶点的前序排列
  private post: Queue<number> // 所有顶点的后序排列
  private reversePost: Stack<number> // 所有顶点的逆后序排列

  constructor(G: EdgeWeightedDigraph)
  constructor(G: Digraph)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(G: any) {
    this.marked = []
    this.pre = new Queue<number>()
    this.post = new Queue<number>()
    this.reversePost = new Stack<number>()

    for (let v = 0; v < G.countV(); v++) {
      if (!this.marked[v]) this.dfs(G, v)
    }
  }

  private dfs(G: Digraph | EdgeWeightedDigraph, v: number): void {
    this.pre.enqueue(v)
    this.marked[v] = true

    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const e = adj.next()
      const w = typeof e === 'number' ? e : e.to()
      if (!this.marked[w]) this.dfs(G, w)
    }
    this.post.enqueue(v)
    this.reversePost.push(v)
  }

  getPre() {
    return this.pre
  }
  getPost() {
    return this.post
  }
  getReversePost() {
    return this.reversePost
  }
}
