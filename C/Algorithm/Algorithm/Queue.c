#include <stdlib.h>
#include <stdlib.h>
#include "malloc.h"
#include "queue.h"

/**
 * Create a empty queue
 *
 * @param Q       PQUEUE
 * @param maxsize int
 */
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

/**
 * Traverse Queue Print the stack element.
 *
 * @param Q PQUEUE
 */
void TraverseQueue(PQUEUE Q)
{
    int i = Q->front;
    printf("队中的元素是:\n");
    while(i % Q->maxsize != Q->rear)
    {
        printf("%d", Q->pBase[i]);
        i++;
    }
    printf("\n");
}
