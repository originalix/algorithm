#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define MAXSIZE 100 /* 存储空间初始分配量 */

typedef int Status; /* Status是函数类型，其值是函数的返回结果 */
typedef char TElemType;
typedef enum {Link, Thread} PointerTag; /* Link==0 表示指向左右孩子指针 */

typedef struct BiThrNode /* 二叉线索存储结点结构 */
{
    TElemType data; /* 结点数据 */
    struct BiThrNode *lchild, *rchild; /* 左右孩子指针 */
    PointerTag LTag;
    PointerTag RTag; /* 左右标志 */
} BiThrNode, *BiThrTree;

TElemType Nil = '#'; /* 字符型以空格符为空 */

Status visit(TElemType e)
{
    printf("%c\n", e);
    return OK;
}

Status CreateBiThrTree(BiThrTree *T)
{
    TElemType h;
    scanf("%c", &h);

    if (h == Nil) {
        *T = NULL;
    } else {
        *T = (BiThrTree)malloc(sizeof(BiThrTree));
        if (!*T) {
            exit(OVERFLOW);
        }
        (*T)->data = h;
        CreateBiThrTree(&(*T)->lchild);
        if ((*T)->lchild) {
            (*T)->LTag = Link;
        }
        CreateBiThrTree(&(*T)->rchild);
        if ((*T)->rchild) {
            (*T)->RTag = Link;
        }
    }
    return OK;
}

int main()
{
    printf("hello wsx\n");
}
