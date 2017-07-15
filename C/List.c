#include <stdio.h>
#include <stdlib.h>
#include "List.h"

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

int main(int argc, char const *argv[])
{
    printf("Hello wsx\n");
    return 0;
}
