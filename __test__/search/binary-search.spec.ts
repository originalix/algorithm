import BinarySearchST from '../../src/algs4/search/binary-search-st'

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
})
