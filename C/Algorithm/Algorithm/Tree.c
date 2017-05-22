//
//  Tree.c
//  Algorithm
//
//  Created by Lix on 2017/5/21.
//  Copyright © 2017年 Leon. All rights reserved.
//

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define MAXSIZE 100 /* 存储空间初始分配量 */
#define MAX_TREE_SIZE 100 /* 二叉树的最大结点数 */

typedef int Status; /* Status是函数类型，其值是函数的返回结果 */
typedef int TElemType; /* 树节点的数据类型, 目前暂定为整型 */
typedef TElemType SqBiTree[MAX_TREE_SIZE]; /* 0号单元存储根结点 */

typedef struct
{
    int level,order; /* 结点的层，本层的序号(按满二叉树计算) */
}Position;

TElemType Nil = 0; /* 设整型以0为空 */

Status visit(TElemType c)
{
    printf("%d\n", c);
    return OK;
}

Status InitBiTree(SqBiTree T)
{
    int i;
    for (i = 0; i < MAX_TREE_SIZE; i++) {
        T[i] = Nil;
    }
    return OK;
}

Status CreateBiTree(SqBiTree T)
{
    int i = 0;
    printf("请按层序输入结点的值(整型), 0表示空结点，输999结束。结点数<= %d:\n", MAX_TREE_SIZE);
    while(i < 10) {
        T[i] = i + 1;
        if (i != 0 && T[(i + 1) / 2 - 1] == Nil && T[i] != Nil) { /* 此结点(不空)无双亲且不是根 */
            printf("出现无双亲的非根结点%d\n", T[i]);
            exit(ERROR);
        }
        i++;
    }

    while(i < MAX_TREE_SIZE) {
        T[i] = Nil; /* 将空赋值给T的后面的结点 */
        i++;
    }

    return OK;
}

#define ClearBiTree InitBiTree
/* 初始条件： 二叉树T存在 */
/* 操作结果： 若T为空二叉树，则返回TRUE,否则FALSE */
Status BiTreeEmpty(SqBiTree T)
{
    if (T[0] == Nil) {
        return TRUE;
    } else {
        return FALSE;
    }
}

/* 初始条件： 二叉树T存在。操作结果：返回T的深度 */
int BiTreeDepth(SqBiTree T)
{
    int i, j = -1;
    for (i = MAX_TREE_SIZE -1; i >= 0; i--) {
        if (T[i] != Nil) {
            break;
        }
    }
    i++;
    do {
        j++;
    } while(i >= powl(2, j));
    return j;
}

/* 初始条件：二叉树T存在 */
/* 操作结果： 当T不空，用e返回T的根，返回OK；否则返回ERROR，e无定义 */
Status Root(SqBiTree T, TElemType *e)
{
    if (BiTreeEmpty(T)) {
        return ERROR;
    } else {
        *e = T[0];
        return OK;
    }
}

/* 初始条件: 二叉树T存在，e是T中某个结点(的位置) */
/* 操作结果: 返回处于位置e(层，本层序号)的结点的值 */
TElemType Value(SqBiTree T, Position e)
{
    return T[(int)powl(2, e.level - 1) + e.order - 2];
}

/* 初始条件: 二叉树T存在，e是T中某个结点(的位置) */
/* 操作结果: 给处于位置e(层，本层序号)的结点赋新值value */
Status Assign(SqBiTree T, Position e, TElemType value)
{
    int i = (int)powl(2, e.level -1) + e.order - 2;
    if (value != Nil && (T[i*2+1] != Nil || T[i*2+2] != Nil)) {
        return ERROR;
    } else if (value == Nil && (T[i*2+1] != Nil)) {
        return ERROR;
    }
    T[i] = value;
    return OK;
}

/* 初始条件: 二叉树T存在，e是T中某个结点 */
/* 操作结果: 若e是T的非根结点,则返回它的双亲,否则返回"空" */
TElemType Parent(SqBiTree T, TElemType e)
{
    int i;
    if (T[0] == Nil) { /* 空树 */
        return Nil;
    }
    for (i = 1; i <= MAX_TREE_SIZE - 1; i++) {
        if (T[i] == e) { /* 找到e */
            return T[(i+1)/2-1];
        }
    }
    return Nil; /* 未找到 */
}

/* 初始条件: 二叉树T存在,e是T中某个结点 */
/* 操作结果: 返回e的左孩子。若e无左孩子,则返回＂空＂ */
TElemType LeftChild(SqBiTree T, TElemType e)
{
    int i;
    if (T[0] == Nil) { /* 空树 */
        return Nil;
    }
    for (i = 0; i <= MAX_TREE_SIZE - 1; i++) {
        if (T[i] == e) { /* 找到e */
            return T[i*2+1];
        }
    }
    return Nil; /* 没找到e */
}

TElemType RightChild(SqBiTree T, TElemType e)
{
    int i;
    if (T[0] == Nil) {
        return Nil;
    }
    for (i = 0; i <= MAX_TREE_SIZE - 1; i++) {
        if (T[i] == e) {
            return T[i*2+2];
        }
    }
    return Nil;
}

int main()
{
    Status i;
    Position p;
    TElemType e;
    SqBiTree T;
    InitBiTree(T);
    CreateBiTree(T);
    printf("建立二叉树后,树空否? %d(1:是 0:否) 树的深度 = %d\n", BiTreeEmpty(T), BiTreeDepth(T));
    i = Root(T, &e);
    if (i) {
        printf("二叉树的根为: %d\n", e);
    } else {
        printf("树空，无根\n");
    }
}

