import { cloneDeep } from 'lodash'
import Stack from '../1-3/node-stack'
import Digraph from './digraph'
import DirectedCycle from './directed-cycle'
import DepthFirstOrder from './depth-first-order'

/**
 * 拓补排序
 */
export default class Topological {
  private order: Stack<number>

  constructor(G: Digraph) {
    const cloneG = cloneDeep(G)
    const cyclefinder = new DirectedCycle(G)
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
