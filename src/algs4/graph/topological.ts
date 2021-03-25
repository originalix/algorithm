import { StdIn } from '@/utils'
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
    const cyclefinder = new DirectedCycle(G)
    if (!cyclefinder.hasCycle()) {
      const dfs = new DepthFirstOrder(G)
      this.order = dfs.getReversePost()
    }
  }

  getOrder() { return this.order }

  isDAG() {
    return this.order !== undefined && this.order !== null
  }
}

async function main() {
  const stream = await StdIn.readFile('tinyDG.txt')
  const data = stream.reduce((prev, line) => ([...prev, ...line.split(' ')]), []).map((val: string) => +val)

  const G = Digraph.createByReadIn(13, data)
  const top = new Topological(G)
  if (top.isDAG()) {
    const order = top.getOrder()
    while (!order.isEmpty()) {
      console.log(order.pop())
    }
  } else {
    console.log('图中存在有向环')
  }
}

main()
