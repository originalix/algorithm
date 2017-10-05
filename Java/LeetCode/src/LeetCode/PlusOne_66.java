package LeetCode;

/**
 * Created by Lix on 2017/10/4.
 */
public class PlusOne_66 {
    public static int[] plusOne(int[] digits) {
        return new int[]{1, 2, 3};
    }

    private static void plusAll() {
//        int[] nums = new int[]{1, 0, 2, 4};
        int nums = 1024;

        // 1
        // 0
        // 2
        // 4
        for (int i = 1; i <= 4; i++) {
            int a = nums % 10000;
            System.out.println("now a = " + a);
        }
    }

    public static void main(String[] args) {
        int[] nums = plusOne(new int[]{1});
        System.out.println(nums);

        plusAll();
    }
}
