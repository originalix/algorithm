import LSD from '@/algs4/strings/lsd'
import TrieST from '@/algs4/strings/tries-st'

describe('字符串算法测试', () => {
  test('LSD', () => {
    const strings = [
      '4PGC938',
      '2IYE230',
      '3CI0720',
      '1ICK750',
      '10HV845',
      '4JZY524',
      '1ICK750',
      '3CI0720',
      '10HV845',
      '10HV845',
      '2RLA629',
      '2RLA629',
      '3ATW723'
    ]
    LSD.sort(strings, 1)
    console.log(strings)
    expect(strings).toStrictEqual([
      '10HV845',
      '10HV845',
      '10HV845',
      '1ICK750',
      '1ICK750',
      '2IYE230',
      '2RLA629',
      '2RLA629',
      '3ATW723',
      '3CI0720',
      '3CI0720',
      '4JZY524',
      '4PGC938'
    ])
  })
  describe('单词查找树', () => {
    test('TrieSt put abc', () => {
      const s = 'abc'
      const tree = new TrieST()
      tree.put(s, 1)
      let node = tree.getRoot()
      expect(node.next[0]).not.toBeNull()
      node = node.next[0]
      expect(node.next[1]).not.toBeNull()
      node = node.next[1]
      expect(node.next[2]).not.toBeNull()
    })
  })
})
