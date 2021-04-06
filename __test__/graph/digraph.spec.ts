import { StdIn } from '@/utils'
import Digraph from '@/algs4/graph/digraph'

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
})
