#ifndef __QUEUE_H_
#define __QUEUE_H_
typedef struct queue
{
    int *pBase;
    int front;
    int rear;
    int maxsize;
}QUEUE, *PQUEUE;

#endif