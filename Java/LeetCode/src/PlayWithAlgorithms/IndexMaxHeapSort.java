package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/20.
 */
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
