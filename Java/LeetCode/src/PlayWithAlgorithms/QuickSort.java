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
        
    }
}
