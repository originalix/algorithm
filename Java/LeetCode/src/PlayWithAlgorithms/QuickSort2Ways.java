package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/18.
 */
public class QuickSort2Ways {

    private QuickSort2Ways() {}

    public static void sort(Comparable[] arr) {
        sort(arr, 0, arr.length-1);
    }

    // 递归的使用快速排序，对arr[l...r]的范围进行排序
    private static void sort(Comparable[] arr, int l, int r) {
        if (r - l <= 15) {
            InsertionSort.sort(arr, l, r);
            return;
        }

        int p = partition(arr, l, r);
        sort(arr, l, p-1);
        sort(arr, p+1, r);
    }


    /**
     * 双路快排的partition操作
     * 返回p, 使得arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p]
     *
     */
    private static int partition(Comparable[] arr, int l, int r) {

        // 随机在arr[l...r]的范围中, 选择一个数值作为标定点pivot
        swap(arr, l, (int) (Math.random() * (r-l+1)) + l);

        Comparable v = arr[l];

        // arr[l+1...i) <= v; arr(j...r] >= v
        int i = l + 1, j = r;

        while (true) {

            // 注意这里的边界, arr[i].compareTo(v) < 0, 不能是arr[i].compareTo(v) <= 0
            while (i <= r && arr[i].compareTo( v ) < 0) {
                i++;
            }
            while (j >= l + 1 && arr[j].compareTo( v ) > 0) {
                j--;
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
        int N = 1000000;

        // 测试1 一般性测试
        System.out.println("Test for random array, size = " + N + " , random range [0, " + N + "]");

        Integer[] arr1 = SortTestHelper.generateRandomArray(N, 0, N);

        SortTestHelper.testSort("PlayWithAlgorithms.QuickSort2Ways", arr1);

        int swapTimes = 100;
        assert swapTimes >= 0;

        // 测试2 近乎有序数组
        System.out.println("Test for nearly ordered array, size = " + N + " , swap time = " + swapTimes);

        arr1 = SortTestHelper.generateNearlyOrderedArray(N, swapTimes);

        SortTestHelper.testSort("PlayWithAlgorithms.QuickSort2Ways", arr1);

        return;
    }
}
