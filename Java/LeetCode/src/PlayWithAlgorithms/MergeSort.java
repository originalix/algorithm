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
        Comparable[] aux = new Comparable[r-l+1];
        for (int i = l; i <= r; i++) {
            aux[i-l] = arr[i];
        }

        int i = l, j = mid + 1;
        for (int k = l; k <= r; k++) {
            if (i > mid) {
                arr[k] = aux[j-l];
                j++;
            } else if (j > r) {
                arr[k] = aux[i - l];
                i++;
            } else if (aux[i-l].compareTo( aux[j-l] ) < 0) {
                arr[k] = aux[i-l];
                i++;
            } else {
                arr[k] = aux[j-l];
                j++;
            }
        }
    }
}
