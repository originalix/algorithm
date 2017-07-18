#ifndef _StackArray_h

struct StackRecord;
typedef struct StackRecord *Stack;
typedef int ElementType;

int IsEmpty(Stack S);
int IsFull(Stack S);
Stack CreateStack();
void DisposeStack(Stack S);
void MakeEmpty(Stack S);
void Push(ElementType X, Stack S);
ElementType Top(Stack S);
void Pop(Stack S);
ElementType TopAndPop(Stack S);

#endif /* _Stack_h*/