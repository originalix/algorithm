/**
 * Created by Lix on 17/4/6.
 */

import java.lang.Math;

public class Sqrt {
    /**
     * 牛顿迭代法求平方根
     * @param  number   求值的数
     * @param  accuracy 精度
     * @return          Double
     */
    public static double NewtonSqrt(double number, double accuracy) {
        double guess = number / 2;
        int count = 0;
        if (number < 0) {
            return Double.NaN;
        }
        while (Math.abs(guess - (number / guess)) > accuracy) {
            guess = (guess + (number / guess)) / 2;
            count++;
            System.out.println("try count = " + count + " guess = " + guess);
        }
        System.out.println("final result = "+ guess);
        return guess;
    }

    public static double DichotomySqrt(double number, double accuracy) {
        double higher = number;
        double lower = 0.0;
        double middle = (lower + higher) / 2;
        double last_middle = 0.00;
        int count = 0;
        if (number < 0) {
            return Double.NaN;
        }
        while (Math.abs(middle - last_middle) > accuracy) {
            if (middle * middle > number) {
                higher = middle;
            } else {
                lower = middle;
            }
            last_middle = middle;
            middle = (lower + higher) / 2;
            count++;
            System.out.println("Dichotomy try count = " + count + " guess = " + last_middle);
        }
        System.out.println("Dichotomy final result = "+ last_middle);
        return last_middle;
    }

    public static void main(String[] args) {
        double result = NewtonSqrt(2,1e-15);
        double dichotomyRes = DichotomySqrt(2,1e-15);
    }
}


