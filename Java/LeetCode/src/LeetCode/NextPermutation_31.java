package LeetCode;

import sun.security.util.Length;

import java.util.Arrays;

/**
 * Created by Lix on 2017/10/14.
 */
public class NextPermutation_31 {
    // 思路：查找最后的元素 比较大小 往前移
    // 若都不行 sort之后 从小到大 输出

    public static void nextPermutation(int[] nums) {
        int index = -1;
        for (int i = nums.length - 2; i >= 0; i--) {
            if (nums[i] < nums[i+1]) {
                index = i;
                break;
            }
        }

        if (index == -1) {
            reverse(nums, 0, nums.length - 1);
            return;
        }

        int biggerIndex = index + 1;
        for (int i = nums.length - 1; i > index; i--) {
            if (nums[i] > nums[index]) {
                biggerIndex = i;
                break;
            }
        }

        int temp = nums[index];
        nums[index] = nums[biggerIndex];
        nums[biggerIndex] = temp;

        reverse(nums, index + 1, nums.length - 1);
    }

    public static void reverse(int[] nums, int start, int end) {
        for (int i = start, j = end; i < j; i++, j--) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }

    public static void main(String[] args) {
        int[] nums = new int[]{1, 3, 2};
        nextPermutation(nums);
    }
}
