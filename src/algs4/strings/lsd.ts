export default class LSD {
  static sort(a: string[], W: number) {
    // 通过前 W 个字符将 a[] 排序
    const N = a.length
    const R = 256
    const aux = []

    // 根据第 d 个字符用键索引计数法排序
    for (let d = W - 1; d >= 0; d--) {
      const count: number[] = Array.from<number>({ length: R + 1 }).fill(0)
      // 计算出现频率
      for (let i = 0; i < N; i++) {
        count[a[i].charCodeAt(d) + 1]++
      }
      // 将频率转换为索引
      for (let r = 0; r < R; r++) {
        count[r + 1] += count[r]
      }
      // 将元素分类
      for (let i = 0; i < N; i++) {
        aux[count[a[i].charCodeAt(d)]++] = a[i]
      }
      // 回写
      for (let i = 0; i < N; i++) {
        a[i] = aux[i]
      }
    }
  }
}
