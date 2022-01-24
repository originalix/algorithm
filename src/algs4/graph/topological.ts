import { cloneDeep } from 'lodash'
import Stack from '../1-3/node-stack'
import Digraph from './digraph'
import DirectedCycle from './directed-cycle'
import DepthFirstOrder from './depth-first-order'
import EdgeWeightedDigraph from './edge-weighted-digraph'
import EdgeWeightedDirectedCycle from './edge-weighted-directed-cycle'

/**
 * 拓补排序
 */
export default class Topological {
  private order: Stack<number>

  // override Topological constructor
  constructor(G: EdgeWeightedDigraph)

  constructor(G: Digraph)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(G: any) {
    const cloneG = cloneDeep(G)
    const cyclefinder = G instanceof EdgeWeightedDigraph ? new EdgeWeightedDirectedCycle(G) : new DirectedCycle(G)
    if (!cyclefinder.hasCycle()) {
      const dfs = new DepthFirstOrder(cloneG)
      this.order = dfs.getReversePost()
    }
  }

  getOrder() {
    return this.order
  }

  isDAG() {
    return this.order !== undefined && this.order !== null
  }
}
