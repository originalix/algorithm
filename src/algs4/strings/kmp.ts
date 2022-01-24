const RADIX = 256

export default class KMP {
  private pat: string
  private dfa: number[][]

  // 由模式字符串构造 DFA
  constructor(pat: string) {
    this.pat = pat
    this.dfa = new Array(RADIX)
    const n = this.pat.length
    for (let i = 0; i < RADIX; i++) {
      this.dfa[i] = new Array(n).fill(0)
    }

    this.dfa[this.pat.charCodeAt(0)][0] = 1

    // 计算 dfa[][curr]
    for (let prev = 0, curr = 1; curr < n; curr++) {
      for (let ch = 0; ch < RADIX; ch++) {
        this.dfa[ch][curr] = this.dfa[ch][prev] // 复制匹配失败情况下的值
      }
      this.dfa[this.pat.charCodeAt(curr)][curr] = curr + 1 // 设置匹配成功情况下的值
      prev = this.dfa[this.pat.charCodeAt(curr)][prev] // 更新重启状态
    }
  }

  // 在 txt 上模拟 DFA 的运行
  search(txt: string) {
    let i, j
    const m = this.pat.length
    const n = txt.length
    for (i = 0, j = 0; i < n && j < m; i++) {
      j = this.dfa[txt.charCodeAt(i)][j]
    }

    // 找到匹配（到达模式字符串的结尾）则返回 i-m
    return j === m ? i - m : -1
  }
}
