#include <iostream>

using namespace std;
void findMainElem(int *pData, int *B,  int &N);
void findMainElem(int *pData, int &N); // N为元素个数
int main()
{
    int N = 9;
    int pData[9] = {4, 3, 4, 2, 4, 3, 4, 2, 4};
    int B[9];
    findMainElem(pData, B, N);
    // int M = 9;
    // int pData1[9] = {3, 3, 4, 2, 4, 4, 2, 4, 4};
    // findMainElem(pData1, M);
    return 0;
}

// 版本1
void findMainElem(int *pData, int *B, int &N)
{

    if (1 == N)
    {
        if (B[N - 1] == B[N])
        {
            cout << "MainElem: " << B[N - 1] << endl;
        }
        else
        {
            cout << "Not Main Element Found!\n";
        }
        return;
    }
    int n = 0;
    if (N % 2)
    {
        for (int i = 0; i < N - 1; i += 2)
        {
            if (pData[i] == pData[i + 1])
                B[n++] = pData[i];
        }
        B[n++] = pData[N - 1]; // N为奇数是将最后一个数作为候选元
        N = n;
    }
    else
    {
        for (int i = 0; i < N; i += 2)
        {
            if (pData[i] == pData[i + 1])
                B[n++] = pData[i];
        }
        --n;
        N = n;
    }
    findMainElem(B, B, N);
}
