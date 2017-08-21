package LeetCode;

/**
 * Created by Lix on 2017/8/17.
 */
public class SortColors_75 {
    public void sortColors(int[] nums) {
        int red = 0;
        int white = 0;
        int blue = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                red++;
            } else if (nums[i] == 1) {
                white++;
            } else {
                blue++;
            }
        }

        for (int i = 0; i < red; i++) {
            nums[i] = 0;
        }

        for (int i = red; i < red + white; i++) {
            nums[i] = 1;
        }

        for (int i = red + white; i < nums.length; i++) {
            nums[i] = 2;
        }
    }


    public static void sortColors1(int[] nums) {
        // nums[0...zero] ---> 0
        // nums[zero+1 ... two - 1] ---> 1
        // nums[two...n-1] ---> 2

        int zero = -1;
        int i = 0;
        int two = nums.length;
    }
}
