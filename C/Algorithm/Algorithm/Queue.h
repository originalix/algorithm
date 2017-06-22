#ifndef __QUEUE_H_
#define __QUEUE_H_

typedef struct queue
{
    int *pBase;
    int front;
    int rear;
    int maxsize;
}QUEUE, *PQUEUE;

void CreateQueue(PQUEUE Q, int maxsize);
void TraverseQueue(PQUEUE Q);
bool FullQueue(PQUEUE Q);
bool EmptyQueue(PQUEUE Q);
bool Enqueue(PQUEUE Q, int val);
bool Dequeue(PQUEUE Q, int *val);

#endif