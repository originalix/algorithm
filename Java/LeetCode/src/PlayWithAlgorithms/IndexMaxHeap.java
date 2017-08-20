package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/20.
 */
public class IndexMaxHeap<Item extends Comparable> {

    protected Item[] data;
    protected int[] indexes;
    protected int[] reverse;
    protected int count;
    protected int capacity;

    public IndexMaxHeap(int capacity) {
        data = (Item[]) new Comparable[capacity + 1];
        indexes = new int[capacity + 1];
        reverse = new int[capacity + 1];
        for (int i = 0; i <= capacity; i++) {
            reverse[i] = 0;
        }
        count = 0;
        this.capacity = capacity;
    }

    int size() {
        return count;
    }

    boolean isEmpty() {
        return count == 0;
    }
    

}
