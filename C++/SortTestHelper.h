#ifndef SORTTESTHELPER_H
#define SORTTESTHELPER_H

#include <iostream>
#include <ctime>
#include <cassert>

using namespace std;

namespace SortTestHelper {
    /* 生成有n个元素的随机数组，每个元素的随机范围为[RangeL, RangeR] */
    int* generateRandomArray(int n, int RangeL, int RangeR) {

        assert(RangeL <= RangeR);

        int *arr = new int[n];
        srand(time(NULL));
        for (int i = 0; i < n; i++)
            arr[i] = rand() % (RangeR - RangeL + 1) + RangeL;
        return arr;
    }
}

#endif //SORTTESTHELPER_H