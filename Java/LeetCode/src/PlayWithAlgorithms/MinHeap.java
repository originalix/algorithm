package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/9/18.
 */
public class MinHeap<Item extends Comparable> {
    private Item[] data;
    private int count;
    private int capacity;

    public MinHeap(int capacity) {
        data = (Item[]) new Comparable[capacity + 1];
        this.count = 0;
        this.capacity = capacity;
    }

    public int size() {
        return count;
    }

    public boolean isEmpty() {
        return count == 0;
    }
}
