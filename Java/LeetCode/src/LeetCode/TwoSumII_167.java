package LeetCode;

/**
 * Created by Lix on 2017/8/21.
 */
public class TwoSumII_167 {

    // 用指针对撞方式解决 #167问题
    public int[] twoSum(int[] numbers, int target) {
        int[] arr = new int[2];
        int left = 0;
        int right = numbers.length - 1;
        while (left < right) {
            int v = numbers[left] + numbers[right];
            if (v == target) {
                arr[0] = left + 1;
                arr[1] = right + 1;
                break;
            } else if (v < target) {
                left++;
            } else {
                right--;
            }
        }

        return arr;
    }

    // 167号题目的暴力解法
    public int[] twoSum1(int[] numbers, int target) {
        int[] result = new int[2];
        for (int i = 0; i < numbers.length; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                if (numbers[i] == target - numbers[j]) {
                    result[0] = i + 1;
                    result[1] = j + 1;
                    break;
                }
            }
        }
        return result;
    }
}
