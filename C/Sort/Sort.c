#include <Stdio.h>
#include <stdlib.h>
#include "Sort.h"

void swap(SqList *L, int i, int j)
{
    int temp = L->r[i];
    L->r[i] = L->r[j];
    L->r[j] = temp;
}

