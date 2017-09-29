package LeetCode;

import javafx.scene.shape.VLineTo;

/**
 * Created by Lix on 2017/9/29.
 */
public class RemoveElement_27 {
    public static int removeElement(int[] nums, int val) {
        int elementCount = 0;
        int swapIndex = nums.length - 1;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == val && swapIndex >= 0) {
                if (nums[swapIndex] == val) {
                    swapIndex -= 1;
                }
                if (swapIndex >= 0) {
                    swap(nums, i, swapIndex);
                    elementCount += 1;
                    swapIndex -= 1;
                }
            }
        }

        if (elementCount == 0) {
            return nums.length;
        }
        for (int i = 0; i < nums.length; i++) {
            System.out.println("now array["+ i +"] is like : " + nums[i]);
        }
        return nums.length - elementCount;
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void main(String[] args) {

        int[] nums = {3, 2, 2, 3};
        int val = 3;

        int result = removeElement(nums, val);
        System.out.println("result is : " + result);
    }
}
