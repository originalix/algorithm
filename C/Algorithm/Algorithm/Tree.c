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

/**
 结点结构
 */
typedef struct PTNode {
    TElemType data;
    int parent;
}PTNode;

/**
 树结构
 */
typedef struct {
    PTNode nodes[MAX_TREE_SIZE]; /* 结点数组 */
    int r,n; /* 根的位置和结点数 */
}PTree;