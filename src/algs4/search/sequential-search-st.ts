export class Node<Key, Value> {
  public key: Key
  public val: Value
  public next: Node<Key, Value>
  constructor(key: Key, val: Value, next: Node<Key, Value>) {
    this.key = key
    this.val = val
    this.next = next
  }
}

class SequentialSearchST<Key, Value> {
  private first: Node<Key, Value>
  get(key: Key): Value {
    for (let x = this.first; x !== null; x = x.next) {
      if (key === x.key) return x.val
    }
    return null
  }

  put(key: Key, val: Value) {
    for (let x = this.first; x !== null; x = x.next) {
      if (key === x.key) {
        x.val = val
        return
      }
    }
    this.first = new Node<Key, Value>(key, val, this.first)
  }
}

function main() {
  const words = 'helloworld'.split('')
  const st = new SequentialSearchST<string, number>()
  words.forEach((v, i) => {
    st.put(v, i)
  })
  console.log(st)
}

main()
