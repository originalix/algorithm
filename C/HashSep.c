#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "HashSep.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define MinTableSize 5

typedef int Status;

struct ListNode
{
    ElementType Element;
    Position Next;
}

typedef Position List;

struct HashTbl
{
    int TableSize;
    List *TheLists;
};

HashTable InitializeTable(int TableSize)
{
    HashTable H;
    int i;

    if (TableSize < MinTableSize)
    {
        printf("Table Size too small\n");
        return NULL;
    }

    H = malloc(sizeof(struct HashTbl));
    if (H == NULL)
        printf("Out of space!!!\n");
    H->TableSize = NextPrime(TableSize);

    H->TheLists = malloc(sizeof(List) * H->TableSize);
    if (H->TheLists == NULL)
        printf("Out of space\n");
    for(i = 0; i < H->TableSize; i++)
    {
        H->TableSize[i] = malloc(sizeof(struct ListNode));
        if (H->TheLists[i] == NULL)
            printf("Out of Space!!!\n");
        else
            H->TheLists[i]->Next = NULL;
    }

    return H;
}

int main(int argc, char const *argv[])
{
    printf("Hello WSX\n");
    return 0;
}