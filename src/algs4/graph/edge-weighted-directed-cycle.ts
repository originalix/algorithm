import Stack from '../1-3/node-stack'
import DirectedEdge from './directed-edge'
import EdgeWeightedDigraph from './edge-weighted-digraph'

/**
 * 寻找加权有向图中的环
 */
export default class EdgeWeightedDirectedCycle {
  private marked: boolean[]
  private edgeTo: DirectedEdge[]
  private cycle: Stack<DirectedEdge>
  private onStack: boolean[]

  constructor(G: EdgeWeightedDigraph) {
    this.marked = []
    this.edgeTo = []
    this.onStack = []

    for (let v = 0; v < G.countV(); v++) {
      if (!this.marked[v]) this.dfs(G, v)
    }
  }

  private dfs(G: EdgeWeightedDigraph, v: number) {
    this.onStack[v] = true
    this.marked[v] = true
    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const e = adj.next()
      const w = e.to()
      if (this.hasCycle()) return
      else if (!this.marked[w]) {
        this.edgeTo[w] = e
        this.dfs(G, w)
      } else if (this.onStack[w]) {
        this.cycle = new Stack<DirectedEdge>()
        let f = e
        while (f.from() !== w) {
          this.cycle.push(f)
          f = this.edgeTo[f.from()]
        }
        this.cycle.push(f)
        return
      }
    }
    this.onStack[v] = false
  }

  hasCycle() {
    return this.cycle !== undefined && this.cycle !== null
  }

  getCycle() {
    return this.cycle
  }
}
