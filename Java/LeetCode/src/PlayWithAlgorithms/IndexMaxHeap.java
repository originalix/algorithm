package PlayWithAlgorithms;

import java.util.Arrays;

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

    public Item extractMax() {
        assert (count > 0);

        Item ret = data[ indexes[1] ];
        swap(indexes, 1, count);
        reverse[ indexes[1] ] = 1;
        reverse[ indexes[count] ] = 0;
        count--;

        shiftDown(1);

        return ret;
    }

    int extractMaxIndex() {
        assert (count > 0);

        int ret = indexes[1] - 1;
        swap(indexes, 1, count);
        reverse[ indexes[1] ] = 1;
        reverse[ indexes[count] ] = 0;
        count--;
        shiftDown(1);
        return ret;
    }

    private boolean contain(int i) {
        assert (i + 1 >= 1 && i + 1 <= capacity);
        return reverse[i+1] != 0;
    }

    private void shiftUp(int k) {
        while (k > 1 && data[ indexes[k / 2] ].compareTo( data[ indexes[k] ] ) < 0) {
            swap(indexes, k / 2, k);
            k /= 2;
        }
    }

    private void shiftDown(int k) {
        while (2*k <= count) {
            int j = 2 * k;
            if (j + 1 <= count && data[ indexes[j] ].compareTo( data[ indexes[j+1] ] ) < 0) {
                j += 1;
            }

            if (data[ indexes[k] ].compareTo(data[ indexes[j] ]) > 0) {
                break;
            }

            swap(indexes, k, j);
            k = j;
        }
    }

    private void swap(int[] arr, int i, int j) {
        int t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;

        reverse[ indexes[i] ] = i;
        reverse[ indexes[j] ] = j;
    }

    public Item getItem(int i) {
        assert (contain(i));
        return data[i + 1];
    }

    public void change(int i, Item newItem) {
        assert(contain(i));

        i += 1;
        data[i] = newItem;

        int j = reverse[i];
        shiftUp(j);
        shiftDown(j);
    }

    Item getMax() {
        assert (count > 0);
        return data[1];
    }

    // 测试索引堆中的索引数组index和反向数组reverse
    // 注意:这个测试在向堆中插入元素以后, 不进行extract操作有效
    public boolean testIndexes(){

        int[] copyIndexes = new int[count+1];
        int[] copyReverseIndexes = new int[count+1];

        for( int i = 0 ; i <= count ; i ++ ) {
            copyIndexes[i] = indexes[i];
            copyReverseIndexes[i] = reverse[i];
        }

        copyIndexes[0] = 0;
        copyReverseIndexes[0] = 0;
        Arrays.sort(copyIndexes);
        Arrays.sort(copyReverseIndexes);

        // 在对索引堆中的索引和反向索引进行排序后,
        // 两个数组都应该正好是1...count这count个索引
        boolean res = true;
        for( int i = 1 ; i <= count ; i ++ )
            if( copyIndexes[i-1] + 1 != copyIndexes[i] ||
                    copyReverseIndexes[i-1] + 1 != copyReverseIndexes[i] ){
                res = false;
                break;
            }

        if( !res ){
            System.out.println("Error!");
            return false;
        }

        return true;
    }

    public static void main(String[] args) {
        
    }

}
