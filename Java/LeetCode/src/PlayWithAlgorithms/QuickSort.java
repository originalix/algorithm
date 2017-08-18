package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/18.
 */
public class QuickSort {

    private QuickSort() {}

    public static void sort(Comparable[] arr) {
        sort(arr, 0, arr.length - 1);
    }

    private static void sort(Comparable[] arr, int l, int r) {
        if (l >= r) {
            return;
        }
        int p = partition(arr, l, r);
        sort(arr, l, p-1);
        sort(arr, p+1, r);
    }

    private static int partition(Comparable[] arr, int l, int r) {
        Comparable v = arr[l];

        // arr[l+1...j] < v; arr[j+1...r] > v
        int j = l;
        for (int i = l + 1; i <= r; i++) {
            if (arr[i].compareTo( v ) < 0) {
                swap(arr, j+1, i);
                j++;
            }
        }
        swap(arr, l, j);
        return j;
    }

    private static void swap(Object[] arr, int i, int j) {
        Object t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}
