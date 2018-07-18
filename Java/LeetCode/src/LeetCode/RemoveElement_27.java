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
            if (nums[i] == val) {
                elementCount += 1;
            }
        }

        if (elementCount == 0) {
            return nums.length;
        }


        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == val) {
                while (nums[swapIndex] == val && swapIndex > i) {
                    swapIndex -= 1;
                }
                swap(nums, i, swapIndex);
            }
            System.out.println("now array["+ i +"] is like : " + nums[i]);
        }
        return nums.length - elementCount;
    }

    private static void swap(int[] arr, int i, int j) {
        int temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    public static int removeElement2(int[] nums, int val) {
        int begin = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[begin++] = nums[i];
            }
        }

        return begin;
    }

    public static void main(String[] args) {

        int[] nums = {3, 2, 2, 3};
        int val = 3;

//        int result = removeElement(nums, val);
        int result = removeElement2(nums, val);
        System.out.println("result is : " + result);
    }
}
