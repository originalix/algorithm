//
//  Tree.c
//  Algorithm
//
//  Created by Lix on 2017/5/21.
//  Copyright © 2017年 Leon. All rights reserved.
//

#include <stdio.h>

/* 树的双亲表示法结点结构定义 */
#define MAX_TREE_SIZE 100
typedef int TElemType; /* 树节点的数据类型, 目前暂定为整型 */
typedef int Status; /* Status是函数类型，其值是函数的返回结果 */

/**
 结点结构
 */
typedef struct PTNode
{
    TElemType data;
    int parent;
}PTNode;

/**
 树结构
 */
typedef struct
{
    PTNode nodes[MAX_TREE_SIZE]; /* 结点数组 */
    int r,n; /* 根的位置和结点数 */
}PTree;

/**
 孩子结点
 */
typedef struct CTNode
{
    int child;
    struct CTNode *next;
}*ChildPtr;

/**
 表头结构
 */
typedef struct
{
    TElemType data;
    ChildPtr firstchild;
}CTBox;

/**
 树结构
 */
typedef struct
{
    CTBox nodes[MAX_TREE_SIZE];
    int r,n;
}CTree;

/**
 树的孩子兄弟表示法结构定义
 */
typedef struct CSNode
{
    TElemType data;
    struct CSNode *firstchild, *rightsib;
}CSNode, *CSTree;

void CreateBiTree(CSTree *T)
{
    TElemType ch;
    scanf("%d", &ch);
    // if (ch == '#') {
    //     *T = NULL;
    // } else {
    //     *T = (CSTree)malloc(sizeof(CSNode));
    //     if (!*T) {
    //         exit(OVERFLOW);
    //     }
    //     (*T)->data = ch;
    //     CreateBiTree(&(*T)->firstchild);
    //     CreateBiTree(&(*T)->rightsib);
    // }
}

int main()
{

}

