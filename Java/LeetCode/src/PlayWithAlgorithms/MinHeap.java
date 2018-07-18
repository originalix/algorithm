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

    public MinHeap(Item arr[], int n) {
        data = (Item[]) new Comparable[n + 1];
        capacity = n;
        for (int i = 0; i < n; i++) {
            data[i+1] = arr[i];
        }
        count = n;
        for (int i = count / 2; i >= 1; i--) {
            shiftDwon(i);
        }
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

    public Item extractMin() {
        assert (count > 0);
        Item ret = data[1];
        swap(1, count);
        count--;
        shiftDwon(1);
        return ret;
    }

    public Item getMin() {
        assert (count > 0);
        return data[1];
    }

    private void shiftUp(int k) {
        while (k > 1 && (data[k/2].compareTo(data[k]) > 0)) {
            swap(k/2, k);
            k /= 2;
        }
    }

    private void shiftDwon(int k) {
        while (2*k <= count) {
            int j = 2*k;
            if (j+1 <= count && (data[j+1].compareTo(data[j]) < 0)) {
                j++;
            }
            if (data[k].compareTo(data[j]) <= 0) {
                break;
            }
            swap(k, j);
            k = j;
        }
    }

    private void swap(int i, int j) {
        Item item = data[i];
        data[i] = data[j];
        data[j] = item;
    }
}
