#include <stdio.h>
#include <stdlib.h>

int PrimeSimple(int num)
{
    int a = 0;

    if (num < 1)
    {
        printf("小于1不是素数! \n");
    }

    for (int i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            a++;
        }
    }

    if (a > 0)
    {
        return 1;
    }

    return 0;
}

int main(int argc, char const *argv[])
{
    int result = PrimeSimple(3);
    printf("素数结果 : %d\n", result);
    printf("Hello wsx\n");
    return 0;
}