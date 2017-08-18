package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/18.
 */
public class HeapSort1 {

    private HeapSort1() {}

    public static void sort(Comparable[] arr) {
        int n = arr.length;
        MaxHeap<Comparable> maxHeap = new MaxHeap<Comparable>(n);
        for (int i = 0; i < n; i++) {
            maxHeap.insert(arr[i]);
        }

        for (int i = n - 1; i >= 0; i--) {
            arr[i] = maxHeap.extractMax();
        }
    }
}
