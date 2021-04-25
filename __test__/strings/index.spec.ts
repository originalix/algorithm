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
    expect(strings).toStrictEqual([
      '1ICK750',
      '10HV845',
      '1ICK750',
      '10HV845',
      '10HV845',
      '2IYE230',
      '2RLA629',
      '2RLA629',
      '3CI0720',
      '3CI0720',
      '3ATW723',
      '4PGC938',
      '4JZY524'
    ])
  })

  describe('单词查找树', () => {
    let data: string[]
    beforeEach(() => {
      data = ['by', 'sea', 'sells', 'she', 'shells', 'shore', 'the']
    })

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

    test('TrieSt get', () => {
      const s = 'abc'
      const tree = new TrieST()
      let val
      tree.put(s, 1)
      val = tree.get('abc')
      expect(val).toBe(1)

      tree.put('Hello World', 'test')
      val = tree.get('Hello World')
      expect(val).toBe('test')
    })

    test('TrieSt keysWithPrefix', () => {
      const tree = new TrieST()
      data.forEach((key, index) => tree.put(key, index))
      const queue = tree.keysWithPrefix('s')
      const res = []
      while (!queue.isEmpty()) {
        res.push(queue.dequeue())
      }
      expect(res).toStrictEqual(['sea', 'sells', 'she', 'shells', 'shore'])
    })

    test('TrieSt keys', () => {
      const tree = new TrieST()
      data.forEach((key, index) => tree.put(key, index))
      const queue = tree.keys()
      const res = []
      while (!queue.isEmpty()) {
        res.push(queue.dequeue())
      }
      expect(res).toStrictEqual(['by', 'sea', 'sells', 'she', 'shells', 'shore', 'the'])
    })

    // test('TrieSt keysThatMatch lix', () => {
    //   const tree = new TrieST()
    //   data.forEach((key, index) => tree.put(key, index))
    //   const queue = tree.keysThatMatch('be')
    //   console.log(queue)
    // })
  })
})
