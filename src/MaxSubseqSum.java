/**
 * Created by Leon on 17/4/21.
 */
public class MaxSubseqSum {
    public static int MaxSubseqSum1(int[] A, int N) {
        int ThisSum, MaxSum = 0;
        int i, j, k;
        for (i = 0; i < N; i++) {
            for (j = i; j < N; j++) {
                ThisSum = 0;
                for (k = i; k < j; k++) {
                    ThisSum += A[k];
                }
                if (ThisSum > MaxSum) {
                    MaxSum = ThisSum;
                }
            }
        }
        return MaxSum;
    }

    public static void main(String[] args) {
        int size = 10;
        int[] testArr = {3, -1, 5, 10, -8, 2, 1, 4, 0, 7};
        int maxSum = 0;
        //算法1运行时间
        long startTime = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {
            maxSum = MaxSubseqSum1(testArr, size);
        }
        long endTime = System.currentTimeMillis();
        System.out.println("Max Subsequence Sum is " + maxSum);
        System.out.println("function run time is  "+ (endTime - startTime) +"ms");
    }
}
