#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "AvlTree.h"

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
};

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

static int Max(int a, int b)
{
    return a > b ? a : b;
}

/* 向左单旋 */
static Position SingleRotateWithLeft(Position K2)
{
    Position K1;

    K1 = K2->Left;
    K2->Left = K1->Right;
    K1->Right = K2;

    K2->Height = Max(Height(K2->Left), Height(K2->Right)) + 1;
    K1->Height = Max(Height(K1->Left), K2->Height) + 1;

    return K1; /* New Root */
}

/* 向右单旋  */
static Position SingleRotateWithRight(Position K2)
{
    Position K1;

    K1 = K2->Right;
    K2->Right = K1->Left;
    K1->Left = K2;

    K2->Height = K2->Height = Max(Height(K2->Left), Height(K2->Right)) + 1;
    K1->Height = Max(K2->Height, Height(K1->Right)) + 1;

    return K1; /*New root */
}

/* 向左双旋 */
static Position DoubleRotateWithLeft(Position K3)
{
    /* Rotate between K1 and K2 */
    K3->Left = SingleRotateWithRight(K3->Left);

    /* Rotate between K3 and K2 */
    return SingleRotateWithLeft(K3);
}

int main(int argc, char const *argv[])
{
    printf("Hello Wsx\n");
    return 0;
}