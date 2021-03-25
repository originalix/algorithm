import Stack from '../1-3/node-stack'
import Digraph from './digraph'

/**
 * 寻找有向环
 */
export default class DritectedCycle {
  private marked: boolean[]
  private edgeTo: number[]
  private cycle: Stack<number>
  private onStack: boolean[]

  constructor(G: Digraph) {
    this.marked = []
    this.edgeTo = []
    this.onStack = []

    for (let v = 0; v < G.countV(); v++) {
      if (!this.marked[v]) this.dfs(G, v)
    }
  }

  private dfs(G: Digraph, v: number) {
    this.onStack[v] = true
    this.marked[v] = true
    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const w = adj.next()
      if (this.hasCycle()) return
      else if (!this.marked[w]) {
        this.edgeTo[w] = v
        this.dfs(G, w)
      } else if (this.onStack[w]) {
        this.cycle = new Stack()
        for (let x = v; x !== w; x = this.edgeTo[x]) {
          this.cycle.push(x)
        }
        this.cycle.push(w)
        this.cycle.push(v)
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
