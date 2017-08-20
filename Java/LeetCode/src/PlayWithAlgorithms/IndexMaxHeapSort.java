package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/20.
 */

// 使用最大索引堆进行堆排序, 来验证我们的最大索引堆的正确性
// 最大索引堆的主要作用不是用于排序, 我们在这里使用排序只是为了验证我们的最大索引堆实现的正确性
public class IndexMaxHeapSort {

    private IndexMaxHeapSort() {}

    public static void sort(Comparable[] arr) {
        IndexMaxHeap<Comparable> indexMaxHeap = new IndexMaxHeap<Comparable>(arr.length);
        for (int i = 0; i < arr.length; i++) {
            indexMaxHeap.insert(i, arr[i]);
        }

        assert indexMaxHeap.testIndexes();

        for (int i = arr.length - 1; i >= 0; i--) {
            arr[i] = indexMaxHeap.extractMax();
        }
    }
}
