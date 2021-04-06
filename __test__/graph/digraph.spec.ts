import { StdIn } from '@/utils'
import Bag from '@/algs4/1-3/bag'
import Digraph from '@/algs4/graph/digraph'
import DirectedDFS from '@/algs4/graph/directed-dfs'
import DepthFirstOrder from '@/algs4/graph/depth-first-order'
import Topological from '@/algs4/graph/topological'

describe('有向图', () => {
  let data: number[] | null
  beforeEach(async () => {
    const stream = await StdIn.readFile('tinyDG.txt')
    data = stream.reduce((prev, line) => [...prev, ...line.split(' ')], []).map((val: string) => +val)
  })

  test('有向图数据结构', () => {
    const graph = Digraph.createByReadIn(13, data)
    expect(graph.countE()).toBe(15)
    expect(graph.countV()).toBe(13)
  })

  test('有向图的可达性', () => {
    const G = Digraph.createByReadIn(13, data)
    const sources = new Bag<number>()
    sources.add(9)

    const reachable = new DirectedDFS(G, sources)
    const points = []
    for (let v = 0; v < G.countV(); v++) {
      if (reachable.isMarked(v)) points.push(v)
    }

    expect(points).toStrictEqual([9, 10, 11, 12])
  })

  test('有向图中基于深度优先搜索的顶点排序', () => {
    const G = Digraph.createByReadIn(13, data)
    const dfsOrder = new DepthFirstOrder(G)

    // 前序遍历
    const pre = dfsOrder.getPre()
    const preRes = []
    while (!pre.isEmpty()) {
      preRes.push(pre.dequeue())
    }
    expect(preRes).toStrictEqual([0, 5, 4, 1, 6, 9, 11, 12, 10, 2, 3, 7, 8])

    // 后序遍历
    const post = dfsOrder.getPost()
    const postRes = []
    while (!post.isEmpty()) {
      postRes.push(post.dequeue())
    }
    expect(postRes).toStrictEqual([4, 5, 1, 12, 11, 10, 9, 6, 0, 3, 2, 7, 8])

    // 逆后序遍历
    const reversePost = dfsOrder.getReversePost()
    const reversePostRes = []
    while (!reversePost.isEmpty()) {
      reversePostRes.push(reversePost.pop())
    }
    expect(reversePostRes).toStrictEqual([8, 7, 2, 3, 0, 6, 9, 10, 11, 12, 1, 5, 4])
  })

  test('拓补排序', () => {
    const G = Digraph.createByReadIn(13, data)
    const top = new Topological(G)
    const res = []
    if (top.isDAG()) {
      const order = top.getOrder()
      while (!order.isEmpty()) {
        res.push(order.pop())
      }
    } else {
      console.log('图中存在有向环')
    }

    expect(res).toStrictEqual([8, 7, 2, 3, 0, 6, 9, 10, 11, 12, 1, 5, 4])
  })
})
