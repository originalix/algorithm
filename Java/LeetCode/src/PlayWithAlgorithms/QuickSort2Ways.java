package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/18.
 */
public class QuickSort2Ways {

    private QuickSort2Ways() {}
    public static void sort(Comparable[] arr) {
        sort(arr, 0, arr.length-1);
    }

    private static void sort(Comparable[] arr, int l, int r) {
        if (r - l <= 15) {
            InsertionSort.sort(arr, l, r);
            return;
        }

        int p = partition(arr, l, r);
        sort(arr, l, p-1);
        sort(arr, p+1, r);
    }

    private static int partition(Comparable[] arr, int l, int r) {
        swap(arr, l, (int) Math.random() * (r - l + 1) + l);
        Comparable v = arr[l];

        int i = l + 1, j = r;
        while (true) {
            while (i <= r && arr[i].compareTo( v ) < 0) {
                i++;
            }
            while (j >= l + 1 && arr[j].compareTo( v ) > 0) {
                j++;
            }
            if (i > j) break;
            swap(arr, i, j);
            i++;
            j--;
        }

        swap(arr, l, j);
        return j;
    }

    private static void swap(Object[] arr, int i, int j) {
        Object t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    public static void main(String[] args) {
        
    }
}
