#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "Tree.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

typedef int Status;

struct AvlNode
{
    ElementType Element;
    AvlTree Left;
    AvlTree Right;
    int Height;
}

/**
 * 计算Avl节点高度
 * @param  P 节点P
 * @return 树高
 */
static int Height(Position P)
{
    if (P == NULL)
        return -1;
    else
        return P->Height;
}

/* 向左单旋 */
static Position SingleRotateWithLeft(Position K2)
{
    Position K1;

    K1 = K2->Right;
    K2->Left = K1->Right;
    K1->Right = K2;

    K2->Height = Max(Height(K2->Left), Height(k2->Right)) + 1;
    K1->Height = Max(Height(K1->Left), k2->Height) + 1;

    return K1; /* New Root */
}

static int Max(int a, int b)
{
    return a > b ? a : b;
}

int main(int argc, char const *argv[])
{
    printf("Hello Wsx\n");
    return 0;
}