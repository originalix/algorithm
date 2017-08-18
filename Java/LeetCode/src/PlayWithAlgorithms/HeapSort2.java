package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/18.
 */
public class HeapSort2 {

    private HeapSort2() {}

    public static void sort(Comparable[] arr) {
        MaxHeap<Comparable> maxHeap = new MaxHeap<Comparable>(arr);
        for (int i = arr.length - 1; i >= 0; i--) {
            arr[i] = maxHeap.extractMax();
        }
    }

    public static void main(String[] args) {
        int N = 1000000;
        Integer[] arr = SortTestHelper.generateRandomArray(N, 0, N);
        SortTestHelper.testSort("PlayWithAlgorithms.HeapSort2", arr);

        return;
    }
}
