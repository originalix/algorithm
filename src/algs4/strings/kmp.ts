const ACode = 97

export default class KMP {
  private pat: string
  private dfa: number[][]

  constructor(pat: string) {
    this.pat = pat
    const M = pat.length
    const R = 26
    this.dfa = Array.from({ length: R }, () => [])
    for (const sub of this.dfa) {
      for (let i = 0; i < M; i++) {
        sub[i] = null
      }
    }
    this.dfa[this.pat.charCodeAt(0) - ACode][0] = 1

    for (let X = 0, j = 1; j < M; j++) {
      for (let c = 0; c < R; c++) {
        this.dfa[c][j] = this.dfa[c][X]
      }
      this.dfa[this.pat.charCodeAt(j) - ACode][j] = j + 1
      X = this.dfa[this.pat.charCodeAt(j) - ACode][X]
    }
  }

  search(txt: string): number {
    let i, j
    const N = txt.length
    const M = this.pat.length
    for (i = 0, j = 0; i < N && j < M; i++) {
      j = this.dfa[txt.charCodeAt(i) - ACode][j]
    }
    if (j === M) {
      return i - M
    } else {
      return N
    }
  }
}
