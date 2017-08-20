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

    public int size() {
        return count;
    }

    public boolean isEmpty() {
        return count == 0;
    }

    public void insert(int i, Item item) {
        assert (count + 1 <= capacity);
        assert (i + 1 >= 1 && i + 1 <= capacity);

        assert ( !contain(i) );

        i += 1;
        data[i] = item;
        indexes[count + 1] = i;
        reverse[i] = count + 1;

        count++;
        shiftUp( count );
    }

    private boolean contain(int i) {
        assert (i + 1 >= 1 && i + 1 <= capacity);
        return reverse[i+1] != 0;
    }

    private void shiftUp(int k) {
        while (k > 1 && data[ indexes[k / 2] ].compareTo( data[ indexes[k] ] ) < 0) {
            swap(indexes, k / 2, k);
            reverse[ indexes[k / 2] ] = k / 2;
            reverse[ indexes[k] ] = k;
            k /= 2;
        }
    }

    private void swap(int[] arr, int i, int j) {
        int t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}
