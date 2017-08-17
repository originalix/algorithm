package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/17.
 */
public class MergeSort {

    private MergeSort() {}

    public static void sort(Comparable[] arr) {
        sort(arr, 0, arr.length-1);
    }

    private static void sort(Comparable[] arr, int l, int r) {
        if (l >= r) {
            return;
        }

        int mid = (l + r) / 2;
        sort(arr, l, mid);
        sort(arr, mid+1, r);
        if (arr[mid].compareTo( arr[mid+1] ) > 0) {
            merge(arr, l, mid, r);
        }
    }

    private static void merge(Comparable[] arr, int l, int mid, int r) {
        
    }
}
