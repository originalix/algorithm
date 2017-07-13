#include <stdio.h>
#include <stdlib.h>
#include <math.h>

void PrimeSimple(int num)
{
    int a = 0;

    if (num < 1)
    {
        printf("小于1不是素数! \n");
    }

    for (int i = 2; i < num; i++)
    {
        if (num % i == 0)
            a++;
            break;
    }

    if (a > 0)
        printf("%d是素数。\n", num);
    else
        printf("%d不是素数。\n", num);
}

void PrimeQuick(int num)
{
    int a = 0;
    int k = 0;

    k = (int)sqrt((double)num);
    for (int i = 2; i <= k; i++)
        if (num % i == 0)
            a++;
    if (a > 0)
        printf("Quick: %d是素数\n", num);
    else
        printf("Quick: %d不是素数\n", num);
}

/**
 * 算法查找主要元素
 *
 * A1 -> A2
 * if true 添加A1 进B数组
 * else 不操作
 * next A3->A4
 * 之后 递归 搜索B数组 条件一样
 * 递归条件  比较到最后一组 返回
 */

void MainElement(int A[], int size)
{
    int B[100];
    int j = 0;

    for (int i = 1; i < size; i++)
    {
        if (A[i - 1] == A[i]) {
            B[j] = A[i];
            j++;
        }
        i += 2;
    }

    printf("j = %d\n", j);

    for (int k = 0; k < j; k++)
        printf("B[%d] = %d\n", k, B[k]);
}

int main(int argc, char const *argv[])
{
    // PrimeSimple(1000000);
    // PrimeQuick(1000000000);
    int A[6] = {3, 3, 6, 3, 0, 3};
    MainElement(A, 6);
    printf("Hello wsx\n");
    return 0;
}
