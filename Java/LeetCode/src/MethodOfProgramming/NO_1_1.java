package MethodOfProgramming;

/**
 * Created by Lix on 2017/12/17.
 */

/**
 * 字符串的旋转
 * 来自章节1.1.1
 */
public class NO_1_1 {
    /**
     * 字符串的旋转，解法一：蛮力移位
     *  示例 abcdef -> defabc
     */
    public static void LeftRotateString(String[] s, int n, int m) {
        while (m > 0) {
            LeftShiftOne(s, n);
            m -= 1;
        }

        for (int i = 0; i < s.length; i++) {
            System.out.println(s[i]);
        }
    }

    private static void LeftShiftOne(String[] s, int n) {
        String t = s[0];
        for (int i = 1; i < n; i++) {
            s[i - 1] = s[i];
        }
        s[n - 1] = t;
    }

    public static void main(String[] args) {
        String[] s = new String[]{"a", "b", "c", "d", "e", "f", "g"};
        LeftRotateString(s, 7, 3);
    }
}
