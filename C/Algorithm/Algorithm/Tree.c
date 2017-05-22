//
//  Tree.c
//  Algorithm
//
//  Created by Lix on 2017/5/21.
//  Copyright © 2017年 Leon. All rights reserved.
//

#include <stdio.h>

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
    int lezvel,order; /* 结点的层，本层的序号(按满二叉树计算) */
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
        if (i != 0 && T[(i + 1) / 2 - 1] == Nil && T[i] != Nil) {
            printf("出现无双亲的非根结点%d\n", T[i]);
            exit(ERROR);
        }
        i++;
    }

    while(i < MAX_TREE_SIZE) {
        T[i] = Nil;
        i++;
    }

    return OK;
}

int main()
{
    printf("HELLO WORLD WSX\n");
}

