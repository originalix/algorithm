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

    public void insert(Item item) {
        assert(count + 1 <= capacity);
        data[count + 1] = item;
        this.count++;
        shiftUp(count);
    }

    private void shiftUp(int k) {
        while (k > 1 && (data[k/2].compareTo(data[k]) > 0)) {
            swap(k/2, k);
            k /= 2;
        }
    }

    private void swap(int i, int j) {
        Item item = data[i];
        data[i] = data[j];
        data[j] = item;
    }
}
