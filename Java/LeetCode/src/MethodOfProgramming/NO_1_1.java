package MethodOfProgramming;

/**
 * Created by Lix on 2017/12/17.
 */

/**
 * 字符串的旋转
 * 来自章节1.1.1
 */
public class NO_1_1 {
    public static void LeftRotateString(String[] s, int n, int m)
    {
        while (m > 0) {
            LeftShiftOne(s, n);
            m -= 1;
        }
    }

    private static void LeftShiftOne(String[] s, int n)
    {
        String t = s[0];
        for (int i = 1; i < n; i++) {
            s[i - 1] = s[i];
        }
        s[n - 1] = t;
    }
}
