#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "CursorList.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define SpaceSize 100

typedef int Status;

struct Node
{
    ElementType Element;
    Position Next;
};

struct Node CursorSpace[ SpaceSize ];

int main(int argc, char const *argv[])
{
    printf("Hello Wsx\n");
    return 0;
}