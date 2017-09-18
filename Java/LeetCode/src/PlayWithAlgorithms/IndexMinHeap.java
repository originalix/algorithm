package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/9/18.
 */
public class IndexMinHeap<Item extends Comparable> {
    private Item[] data;
    private int[] indexes;
    private int[] reverse;

    private int count;
    private int capacity;

    IndexMinHeap(int capacity) {
        data = (Item[]) new Comparable[capacity + 1];
        indexes = new int[capacity + 1];
        reverse = new int[capacity + 1];

        for (int i = 0; i <= capacity; i++) {
            reverse[i] = -1;
        }
        count = 0;
        this.capacity = capacity;
    }
}
