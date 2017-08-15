#include <iostream>
#include "SortTestHelper.h"

using namespace std;

/**
 * 选择排序
 */
template <typename T>
void selectionSort(T arr[], int n) {
    for (int i = 0; i < n; i++) {

        // 寻找[i, n]区间里最小值
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }
        swap(arr[i], arr[minIndex]);
    }
}
