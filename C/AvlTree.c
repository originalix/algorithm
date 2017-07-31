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

int main(int argc, char const *argv[])
{
    printf("Hello Wsx\n");
    return 0;
}