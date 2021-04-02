import { StdIn } from '@/utils'
import { __DEBUG__ } from '@/constants'
import Queue from '../1-3/node-queue'
import Stack from '../1-3/node-stack'
import Digraph from './digraph'

/**
 * 有向图中基于深度优先搜索的顶点排序
 */
export default class DepthFirshOrder {
  private marked: boolean[]
  private pre: Queue<number> // 所有顶点的前序排列
  private post: Queue<number> // 所有顶点的后序排列
  private reversePost: Stack<number> // 所有顶点的逆后序排列

  constructor(G: Digraph) {
    this.marked = []
    this.pre = new Queue<number>()
    this.post = new Queue<number>()
    this.reversePost = new Stack<number>()

    for (let v = 0; v < G.countV(); v++) {
      if (!this.marked[v]) this.dfs(G, v)
    }
  }

  private dfs(G: Digraph, v: number) {
    this.pre.enqueue(v)
    this.marked[v] = true

    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const w = adj.next()
      if (!this.marked[w]) this.dfs(G, w)
    }
    this.post.enqueue(v)
    this.reversePost.push(v)
  }

  getPre() { return this.pre }
  getPost() { return this.post }
  getReversePost() { return this.reversePost }
}

async function main() {
  const stream = await StdIn.readFile('tinyDG.txt')
  const data = stream.reduce((prev, line) => ([...prev, ...line.split(' ')]), []).map((val: string) => +val)

  const G = Digraph.createByReadIn(13, data)
  const dfsOrder = new DepthFirshOrder(G)

  const pre = dfsOrder.getPre()
  while (!pre.isEmpty()) {
    console.log(pre.dequeue())
  }
  console.log('-----pre queue------')

  const post = dfsOrder.getPost()
  while (!post.isEmpty()) {
    console.log(post.dequeue())
  }
  console.log('-----post queue------')

  const reversePost = dfsOrder.getReversePost()
  while (!reversePost.isEmpty()) {
    console.log(reversePost.pop())
  }
  console.log('-----reversePost stack------')
}

__DEBUG__ && main()
