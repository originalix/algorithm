package LeetCode;

import java.util.Arrays;

/**
 * Created by Lix on 2017/10/14.
 */
public class NextPermutation_31 {
    // 思路：查找最后的元素 比较大小 往前移
    // 若都不行 sort之后 从小到大 输出

    public static void nextPermutation(int[] nums) {
        for (int i = nums.length - 1; i >= 0; i--) {
            if (nums.length - 2 >= 0) {
                if (nums[i] > nums[i-1]) {
                    swap(nums, i, i-1);
                    return;
                }
            }
        }

        Arrays.sort(nums);
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
