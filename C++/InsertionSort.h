#include <iostream>
#include "SortTestHelper.h"

using namespace std;

/* 插入排序 */
template<typename T>
void insertionSort(T arr[], int n) {

    for (int i = 1; i < n; i++) {
        // 寻找元素arr[i]合适的插入位置
        T e = arr[i];
        int j;
        for (j = i; j > 0 && arr[j-1] > e; j--) {
            arr[j] = arr[j-1];
        }
        arr[j] = e;
    }
}
