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
 *
 * 递归
 * if size < 1 return -1
 * if size == 1 return int
 * if size > 1 递归
 *
 */

int SelectedElement(int A[], int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("A[%d] === %d\n", i, A[i]);
    }
    if (size == 1) {
        return A[0];
    }
    if (size < 1) {
        return -1;
    }

    int B[size];
    int j = 0;

    for (int i = 1; i < size; i++)
    {
        if (A[i-1] == A[i]) {
            B[j] = A[i];
            printf("B[%d] === %d\n", j, B[j]);
            j++;
        }
    }
    return SelectedElement(B, j);
}

void MainElement(int A[], int size)
{
    int i = SelectedElement(A, size);
    printf("i ==== %d\n", i);
}

void findMainElem(int *pData, int *B, int &N)
{
    if (1 == N)
    {
        if (B[N - 1] == B[N])
        {
            printf("MainElem: %d\n", B[N - 1]);
        }
        else
        {
            printf("Not Main Element Found!\n");
        }

        return;
    }

    int n = 0;
    if (N % 2)
    {
        for (int i = 0; i < N - 1; i += 2)
        {
            if (pData[i] == pData[i + 1])
            {
                B[n++] = pData[i];
            }
        }
        B[n++] = pData[N - 1];
        N = n;
    }
    else
    {
        for (int i = 0; i < N - 1; i += 2)
        {
            if (pData[i] == pData[i + 1])
            {
                B[n++] = pData[i];
            }
        }
        --n;
        N = n;
    }
    findMainElem(B, B, N);
}

int main(int argc, char const *argv[])
{
    // PrimeSimple(1000000);
    // PrimeQuick(1000000000);
    int A[7] = {3, 7, 3, 6, 3, 7, 3};
    MainElement(A, 7);
    printf("Hello wsx\n");
    return 0;
}
