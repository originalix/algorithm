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

    public IndexMinHeap(int capacity) {
        data = (Item[]) new Comparable[capacity + 1];
        indexes = new int[capacity + 1];
        reverse = new int[capacity + 1];

        for (int i = 0; i <= capacity; i++) {
            reverse[i] = -1;
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

    public void insert(int index, Item item) {
        assert (count + 1 <= capacity);
        assert (index + 1 >= 1 && index + 1 <= capacity);

        assert !contain(index);

        index += 1;
        data[index] = item;
        indexes[count + 1] = index;
        reverse[index] = count + 1;
        count++;

        shiftUp(count);
    }

    public int extractMinIndex() {
        assert count > 0;

        int ret = indexes[1] - 1;
        swapIndexes(1, count);
        reverse[indexes[count]] = -1;
        count--;
        shiftDown(1);

        return ret;
    }

    private boolean contain(int i) {
        assert i + 1 >= 1 && i + 1 <= capacity;
        return reverse[i + 1] != -1;
    }

    private void shiftUp(int k) {
        while (k > 1 && ( data[indexes[k/2]].compareTo( data[indexes[k]] ) > 0 )) {
            swap(k, k/2);
            k /= 2;
        }
    }

    private void shiftDown(int k) {
        while (2*k <= count) {
            int j = 2*k;
            if (j+1 <= count && ( data[indexes[j+1]].compareTo( data[indexes[j]] ) < 0 )) {
                j += 1;
            }
            if (data[indexes[k]].compareTo( data[indexes[j]] ) <= 0) {
                break;
            }
            swapIndexes(k, j);
            k = j;
        }
    }

    private void swapIndexes(int i, int j) {
        int t = indexes[i];
        indexes[i] = indexes[j];
        indexes[i] = t;

        reverse[indexes[i]] = i;
        reverse[indexes[j]] = j;
    }
}
