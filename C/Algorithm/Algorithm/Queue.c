#include <stdlib.h>
#include <stdlib.h>
#include "malloc.h"
#include "queue.h"

void CreateQueue(PQUEUE Q, int maxsize)
{
    Q->pBase = (int *)malloc(sizeof(int)*maxsize);
    if (NULL == Q->pBase)
    {
        printf("Memory allocation failure\n");
        exit(-1);
    }
    Q->front = 0;
    Q->rear = 0;
    Q->maxsize = maxsize;
}