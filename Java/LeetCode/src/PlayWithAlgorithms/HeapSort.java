package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/19.
 */
public class HeapSort {
    private HeapSort() {}

    public static void sort(Comparable[] arr) {
        int n = arr.length;
        for ( int i = (n-1) / 2; i >= 0; i-- ) {
            shiftDown(arr, n, i);
        }

        for (int i = n - 1; i > 0; i--) {
            swap(arr, 0, i);
            shiftDown(arr, i, 0);
        }
    }

    private static void shiftDown(Comparable[] arr, int n, int k) {
        while ( 2*k+1 < n) {
            int j = 2 * k + 1;
            if (j + 1 < n && arr[j].compareTo( arr[j+1] ) < 0) {
                j += 1;
            }

            if (arr[k].compareTo( arr[j] ) >= 0) {
                break;
            }

            swap(arr, j, k);

            k = j;
        }
    }

    private static void swap(Object[] arr, int i, int j) {
        Object t = arr[i];
        arr[j] = arr[i];
        arr[i] = t;
    }

    public static void main(String[] args) {
        int N = 1000000;
        Integer[] arr = SortTestHelper.generateRandomArray(N, 0, N);
        SortTestHelper.testSort("PlayWithAlgorithms.HeapSort", arr);

        return;
    }
}
