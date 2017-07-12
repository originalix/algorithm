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
 */

int main(int argc, char const *argv[])
{
    // PrimeSimple(1000000);
    PrimeQuick(1000000000);
    printf("Hello wsx\n");
    return 0;
}
