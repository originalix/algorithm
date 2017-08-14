/**
 * Created by Lix on 2017/8/14.
 */
public class Sort {
    /**
     * 给一组整数，按照升序排序，使用选择排序，冒泡排序，插入排序或者任何 O(n2) 的排序算法。
     * @param arr 数据源
     */
    public void sortIntegers(int[] arr) {
        int size;
        size = arr.length;
        int temp;
        for (int i = 0; i < size - 1; i++) {
            for (int j = 0; j < size - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[ j ] = arr[j + 1];
                    arr[j + 1] = arr[j];
                }
            }
        }

        for (int i = 0; i < arr.length; i++) {
            System.out.println("arr[" + i +"] = " + arr[i]);
        }
    }

    public static void main(String[] args) {
        Sort sort = new Sort();
        int[] a = new int[5];
        a[0] = 5;
        a[1] = 3;
        a[2] = 4;
        a[3] = 2;
        a[4] = 1;

        sort.sortIntegers(a);
        System.out.println("Hello wsx");
    }
}
