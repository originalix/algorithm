package LeetCode;

/**
 * Created by Lix on 2017/8/17.
 */
public class MoveZeroes_283 {

    public void moveZeroes(int[] nums) {
        int k = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                if (k != i) {
                    swap (nums, i, k++);
                } else {
                    k++;
                }
            }
        }
    }

    private void swap(int[] nums, int a, int b) {
        int temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }

    public static void main(String[] args) {

    }
}
