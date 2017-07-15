#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "List.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

typedef int Status;

struct Node
{
    ElementType Element;
    Position Next;
};

void init_list(List L)
{
    L = NULL;
    printf("初始化链表成功\n");
}

List create_list()
{
    List L = NULL;
    List p1, p2;
    p1 = (List)malloc(sizeof(struct Node));
    p2 = (List)malloc(sizeof(struct Node));
    if (p1 == NULL || p2 == NULL)
    {
        printf("内存分配失败!\n");
        exit(0);
        system("pause");
    }
    memset(p1, 0, sizeof(struct Node));
    printf("请输入链表元素的值: \n");
    scanf("%d", &(p1->Element));
    p1->Next = NULL;
    while(p1->Element > 0)
    {
        if (L == NULL)
        {
            L = p1;
        }
        else
        {
            p2->Next = p1;
        }

        p2 = p1;

        p1 = (List)malloc(sizeof(struct Node));
        if (p1 == NULL || p2 == NULL)
        {
            printf("内存分配失败\n");
            exit(0);
            system("pause");
        }
        memset(p1, 0, sizeof(struct Node));
        printf("请输入链表的值: \n");
        scanf("%d", &(p1->Element));
        p1->Next = NULL;
    }
    printf("创建链表成功\n");
    return L;
}

void print_list(List L)
{
    List p = L;
    if (NULL == p)
    {
        printf("print_list: 链表为空!\n");
        return;
    }

    printf("打印链表如下: \n");
    while(p != NULL)
    {
        printf("%d, \n", p->Element);
        p = p->Next;
    }
    printf("\n");
    return;
}

Status IsEmpty(List L)
{
    if (L == NULL)
        return TRUE;
    else
        return FALSE;
}

Status IsLast(Position P, List L)
{
    return P->Next == NULL;
}

int main(int argc, char const *argv[])
{
    List L;
    init_list(L);
    L = create_list();
    print_list(L);
    int isEmpty = IsEmpty(L);
    printf("链表是否为空: %d\n", isEmpty);
    printf("Hello wsx\n");
    return 0;
}
