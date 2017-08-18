package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/17.
 */
public class MaxHeap<Item extends Comparable> {
    protected Item[] data;
    protected int count;
    protected int capacity;

    MaxHeap(int capacity) {
        data = (Item[])new Comparable[capacity + 1];
        count = 0;
        this.capacity = capacity;
    }

    public int size() {
        return count;
    }

    public boolean isEmpty() {
        return count == 0;
    }

    public void insert(Item item) {
        assert (count + 1 <= capacity);
        data[count + 1] = item;
        this.count++;
        shiftUp( count );
    }

    private void shiftUp(int k) {
        while (k > 1 && data[k/2].compareTo(data[k]) < 0) {
            swap(data, k/2, k);
            k /= 2;
        }
    }

    private void swap(Object[] arr, int a, int b) {
        Object t = arr[a];
        arr[a] = arr[b];
        arr[b] = t;
    }

    public Item extractMax() {
        assert (count > 0);
        Item ret = data[1];
        swap(data, 1, count);
        count--;
        shiftDown( 1 );
        return ret;
    }

    private void shiftDown(int k) {
        while (2 * k <= count) {
            int j = 2 * k;
            if (j + 1 <= count && data[j].compareTo(data[j+1]) < 0) {
                j += 1;
            }
            if (data[k].compareTo(data[j]) > 0) {
                break;
            }
            swap(data, k, j);
            k = j;
        }
    }
}
