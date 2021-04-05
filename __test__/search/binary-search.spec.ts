import BinarySearchST from '../../src/algs4/search/binary-search-st'
import BST from '../../src/algs4/search/binary-search-tree'

describe('查找', () => {
  let words: string[]
  beforeEach(() => {
    words = 'XDELSKDDAOEMCD'.split('')
  })

  test('二分查找（基于有序数组）', () => {
    const st = new BinarySearchST<string, string>()
    words.forEach((v, i) => st.put(v, v))
    expect(st.get('L')).toBe('L')
    expect(st.get('N')).toBeNull()
  })

  test('二叉查找树', () => {
    const bst = new BST<string, number>()
    words.forEach((v, i) => bst.put(v, i))

    // 查找
    expect(bst.get('X')).toBe(0)
    // 查找最小键
    const minKey = bst.min()
    expect(minKey).toBe('A')
    // 查找最大键
    const maxKey = bst.max()
    expect(maxKey).toBe('X')
    // 获取所有键
    expect(bst.keys(minKey, maxKey).length).toBeLessThan(words.length)
    // 排名为 0 的键
    expect(bst.select(0)).toBe('A')
    // 返回给定键的排名
    expect(bst.rank('S')).toBe(8)
    // 删除最小键
    bst.deleteMin()
    const nextMinKey = bst.min()
    expect(nextMinKey).toBe('C')
    // 删除操作
    bst.delete(nextMinKey)
    expect(bst.min()).toBe('D')
  })
})
