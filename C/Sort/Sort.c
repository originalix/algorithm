#include <Stdio.h>
#include <stdlib.h>
#include "Sort.h"

void swap(SqList *L, int i, int j)
{
    int temp = L->r[i];
    L->r[i] = L->r[j];
    L->r[j] = temp;
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