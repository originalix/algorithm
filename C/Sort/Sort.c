#include <Stdio.h>
#include <stdlib.h>
#include "Sort.h"

void swap(SqList *L, int i, int j)
{
    int temp = L->r[i];
    L->r[i] = L->r[j];
    L->r[j] = temp;
}

void print(SqList L)
{
    int i;
    for(i=1;i<L.length;i++)
        printf("%d,",L.r[i]);
    printf("%d",L.r[i]);
    printf("\n");
}

void bubbleSort0(SqList *L)
{
    int i, j;
    for (i = 1; i < L->length; i++)
    {
        for (j = i+1; j <= L->length; j++)
        {
            if (L->r[i] > L->r[j])
            {
                swap(L, i, j);
            }
        }
    }
}

int main(int argc, char const *argv[])
{
    printf("Hello WSX\n");
    int a[] = {10, 55, 66, 77, 3, 45, 23, 21, 50, 12};
    SqList *L;
    for (int i = 0; i < 9; i++)
    {
        L->r[i+1] = a[i];
    }
    L->length = 10;
    printf("排序前\n");
    // print(L);

    return 0;
}