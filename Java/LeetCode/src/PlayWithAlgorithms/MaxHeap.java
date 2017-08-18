package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/17.
 */
public class MaxHeap<Item extends Comparable> {
    protected Item[] data;
    protected int count;
    protected int capacity;

    // 构造函数，构造一个空堆，可容纳capacity个元素
    MaxHeap(int capacity) {
        data = (Item[])new Comparable[capacity + 1];
        count = 0;
        this.capacity = capacity;
    }

    // 返回堆中的元素个数
    public int size() {
        return count;
    }

    // 返回一个布尔值，表示堆中是否为空
    public boolean isEmpty() {
        return count == 0;
    }

    // 向最大堆中插入一个新元素 item
    public void insert(Item item) {
        assert (count + 1 <= capacity);
        data[count + 1] = item;
        this.count++;
        shiftUp( count );
    }

    // 从最大堆中取出堆顶元素，即堆中所存储的最大数据
    public Item extractMax() {
        assert (count > 0);
        Item ret = data[1];
        swap(1, count);
        count--;
        shiftDown( 1 );
        return ret;
    }

    // 获取最大堆中的堆顶元素
    public Item getMax() {
        assert (count > 0);
        return data[1];
    }

    // 交换堆中索引为i和j的两个元素
    private void swap(int i, int j) {
        Item item = data[i];
        data[i] = data[j];
        data[j] = item;
    }

    //********************
    //* 最大堆核心辅助函数
    //********************
    private void shiftUp(int k) {
        while (k > 1 && data[k/2].compareTo(data[k]) < 0) {
            swap(k/2, k);
            k /= 2;
        }
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
            swap(k, j);
            k = j;
        }
    }
}
