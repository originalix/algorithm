import { StdIn } from '@/utils'
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

async function main() {
  const stream = await StdIn.readFile('tinyDG.txt')
  const data = stream.reduce((prev, line) => [...prev, ...line.split(' ')], []).map((val: string) => +val)

  const G = Digraph.createByReadIn(13, data)
  const sources = new Bag<number>()

  const args = [1, 2, 6]
  for (let i = 0; i < args.length; i++) {
    sources.add(args[i])
  }

  const reachable = new DirectedDFS(G, sources)
  const points = []
  for (let v = 0; v < G.countV(); v++) {
    if (reachable.isMarked(v)) points.push(v)
  }
  console.log(points.join(' '))
}

main()
