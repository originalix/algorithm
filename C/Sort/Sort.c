#include <Stdio.h>
#include <stdlib.h>
#include "Sort.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

typedef int Status;

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

void BubbleSort0(SqList *L)
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

/**
 * 对顺序表L做冒泡排序
 * @param L SqList
 */
void BubbleSort(SqList *L)
{
    int i, j;
    for (i=1; i < L->length; i++)
    {
        for (j = L->length - 1; j >= i; j--)
        {
            if (L->r[j] > L->r[j+1])
            {
                swap(L, j, j+1);
            }
        }
    }
}

/* 对顺序表L做冒泡排序（改进版本） */
void BubbleSort2(SqList *L)
{
    int i, j;
    Status flag=TRUE;
    for (i = 1; i < L->length; i++)
    {
        flag = FALSE;
        for (j=L->length - 1; j >= i; j--)
        {
            if (L->r[j] > L->r[j+1])
            {
                swap(L, j, j+1);
                flag = TRUE;
            }
        }
    }
}

/* 对顺序表L做直接插入排序 */
void InsertSort(SqList *L)
{
    int i, j;
    for (i = 2; i <= L->length; i++)
    {
        if (L->r[i] < L->r[i-1])
        {
            L->r[0] = L->r[i];
            for (j = i-1; L->r[j] > L->r[0]; j--)
                L->r[j+1] = L->r[j];
            L->r[j+1] = L->r[0];
        }
    }
}

/* 对顺序表L做希尔排序 */
void ShellSort(SqList *L)
{
    int i, j, k=0;
    int increment = L->length;
    do
    {
        increment = increment / 3 + 1;
        for (i = increment + 1; )
    }
}

int main(int argc, char const *argv[])
{
    printf("Hello WSX\n");
    int a[] = {10, 55, 66, 77, 3, 45, 23, 21, 50, 12};
    SqList L;
    SqList l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10;
    for (int i = 0; i < 9; i++)
    {
        L.r[i+1] = a[i];
    }
    L.length = 10;
    l1=l2=l3=l4=l5=l6=l7=l8=l9=l10=L;

    printf("排序前\n");
    print(L);

    printf("初级冒泡排序:\n");
    BubbleSort0(&L);
    print(L);

    printf("冒泡排序:\n");
    BubbleSort(&l1);
    print(l1);

    printf("改良版冒泡排序:\n");
    BubbleSort2(&l2);
    print(l2);

    printf("直接插入排序:\n");
    InsertSort(&l4);
    print(l4);

    return 0;
}