package LeetCode;

/**
 * Created by Lix on 2017/10/4.
 */
public class PlusOne_66 {
    public static int[] plusOne(int[] digits) {
        int n = digits.length;
        for (int i = n - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }

            digits[i] = 0;
        }

        int[] newNumber = new int[n+1];
        newNumber[0] = 1;
        return  newNumber;
    }

    public static void main(String[] args) {
        int[] nums = plusOne(new int[]{9, 9, 9});
        for (int i = 0; i < nums.length; i++) {
            System.out.println(nums[i]);
        }
    }
}
