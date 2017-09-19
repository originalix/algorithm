package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/9/18.
 */

// 最小索引堆
public class IndexMinHeap<Item extends Comparable> {
    private Item[] data;    // 最小索引堆中的数据
    private int[] indexes;  // 最小索引堆中的索引，indexes[x] = i 表示索引i在x的位置
    private int[] reverse;  // 最小索引堆中的反向索引，reverse[i] = x 表示索引i在x的位置
    private int count;
    private int capacity;

    // 构造函数，构造一个空堆，可容纳capacity个元素
    public IndexMinHeap(int capacity) {
        data = (Item[]) new Comparable[capacity + 1];
        indexes = new int[capacity + 1];
        reverse = new int[capacity + 1];

        for (int i = 0; i <= capacity; i++) {
            reverse[i] = 0;
        }
        count = 0;
        this.capacity = capacity;
    }

    // 返回索引堆中的个数
    public int size() {
        return count;
    }

    // 返回一个布尔值，表示索引堆中是否为空
    public boolean isEmpty() {
        return count == 0;
    }

    // 向最小堆中插入一个新的元素，新元素的索引为i，元素为item
    // 传入的i对用户而言，是从0索引的
    public void insert(int index, Item item) {
        assert (count + 1 <= capacity);
        assert (index + 1 >= 1 && index + 1 <= capacity);

        // 在插入一个新元素前，还需要保证索引i所在的位置是没有元素的
        assert !contain(index);

        index += 1;
        data[index] = item;
        indexes[count + 1] = index;
        reverse[index] = count + 1;
        count++;

        shiftUp(count);
    }

    // 从最小索引堆中取出堆顶元素，即索引堆中所存储的最小数据
    public Item extractMin() {
        assert count > 0;

        Item ret = data[indexes[1]];
        swapIndexes(1, count);
        reverse[indexes[count]] = 0;
        count--;
        shiftDown(1);

        return ret;
    }

    // 从最小索引堆中取出堆顶元素的索引
    public int extractMinIndex() {
        assert count > 0;
        int ret = indexes[1] - 1;
        swapIndexes(1, count);
        reverse[indexes[count]] = 0;
        count--;
        shiftDown(1);
        return ret;
    }

    // 获取最小索引堆中的堆顶元素
    public Item getMin() {
        assert count > 0;
        return data[indexes[1]];
    }

    // 获取最小索引堆中的堆顶元素的索引
    public int getMinIndex() {
        assert count > 0;
        return indexes[1] - 1;
    }

    // 看索引i所在的位置是否存在元素
    private boolean contain(int i) {
        assert i + 1 >= 1 && i + 1 <= capacity;
        return reverse[i + 1] != 0;
    }

    // 获取最小索引堆中索引为i的元素
    public Item getItem(int i) {
        assert contain(i);
        return data[i+1];
    }

    // 将最小索引堆中索引为i的元素修改为newItem
    public void change(int i, Item newItem) {
        assert contain(i);
        i += 1;
        data[i] = newItem;

        // 有了 reverse 之后,
        // 我们可以非常简单的通过reverse直接定位索引i在indexes中的位置
        shiftUp(reverse[i]);
        shiftDown(reverse[i]);
    }

    //********************
    //* 最小索引堆核心辅助函数
    //********************

    // 索引堆中, 数据之间的比较根据data的大小进行比较, 但实际操作的是索引
    private void shiftUp(int k) {
        while (k > 1 && ( data[indexes[k/2]].compareTo( data[indexes[k]] ) > 0 )) {
            swapIndexes(k, k/2);
            k /= 2;
        }
    }

    // 索引堆中, 数据之间的比较根据data的大小进行比较, 但实际操作的是索引
    private void shiftDown(int k) {
        while (2*k <= count) {
            int j = 2*k;
            if (j+1 <= count && ( data[indexes[j+1]].compareTo( data[indexes[j]] ) < 0 )) {
                j++;
            }
            if (data[indexes[k]].compareTo( data[indexes[j]] ) <= 0) {
                break;
            }
            swapIndexes(k, j);
            k = j;
        }
    }

    // 交换索引堆中的索引i和j
    // 由于有了反向索引reverse数组，
    // indexes数组发生改变以后， 相应的就需要维护reverse数组
    private void swapIndexes(int i, int j) {
        int t = indexes[i];
        indexes[i] = indexes[j];
        indexes[j] = t;

        reverse[indexes[i]] = i;
        reverse[indexes[j]] = j;
    }

    // 测试 IndexMinHeap
    public static void main(String[] args) {

        int N = 1000000;
        IndexMinHeap<Integer> indexMinHeap = new IndexMinHeap<Integer>(N);
        for( int i = 0 ; i < N ; i ++ ) {
            indexMinHeap.insert( i , (int)(Math.random()*N) );
        }

        for( int i = 0 ; i < N ; i ++ ) {
            System.out.println(indexMinHeap.extractMin());
        }
    }
}
