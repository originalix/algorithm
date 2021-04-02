export class NodeItem<T> {
  public item: T
  public next: NodeItem<T>
}

export class NodeIterator<T> {
  private current: NodeItem<T>

  protected setCurrent(first: NodeItem<T>) {
    this.current = first
  }

  hasNext(): boolean {
    return this.current && this.current !== null
  }

  remove() {}
  next(): T {
    const item = this.current.item
    this.current = this.current.next
    return item
  }
}
