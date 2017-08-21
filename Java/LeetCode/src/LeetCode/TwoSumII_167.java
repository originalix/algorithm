package LeetCode;

/**
 * Created by Lix on 2017/8/21.
 */
public class TwoSumII_167 {
    
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
