import Graph, { createGraphFromReadIn } from './graph'

/**
 * 使用深度优先搜索查找图中的路径
 *
 * @class DepthFirstSearch
 */
export default class DepthFirstPaths {
  private marked: boolean[] // 这个顶点上调用过 dfs() 吗
  private edgeTo: number[] // 从起点到一个顶点的已知路径上的最后一个顶点
  private s: number // 起点

  constructor(G: Graph, s: number) {
    this.marked = []
    this.edgeTo = []
    this.s = s
    this.dfs(G, s)
  }

  private dfs(G: Graph, v: number) {
    this.marked[v] = true

    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const w = adj.next()
      if (!this.marked[w]) {
        this.edgeTo[w] = v
        this.dfs(G, w)
      }
    }
  }

  hasPathTo(v: number): boolean {
    return this.marked[v]
  }

  pathTo(v: number) {
    if (!this.hasPathTo(v)) return null
    const path = []
    for (let x = v; x !== this.s; x = this.edgeTo[x]) {
      path.push(x)
    }
    path.push(this.s)
    return path
  }
}

function main() {
  const pointArr = [0, 1, 0, 5, 0, 2, 2, 1, 2, 3, 3, 5, 3, 4]
  const G = createGraphFromReadIn(6, pointArr)
  const s = 0
  const search = new DepthFirstPaths(G, s)
  for (let v = 0; v < G.countV(); v++) {
    const str = `${s} to ${v}: `
    const res = []
    if (search.hasPathTo(v)) {
      for (const x of search.pathTo(v)) {
        res.push(x)
      }
    }
    console.log(str + res.reverse().join('-'))
  }
}

main()
