#include <iostream>

using namespace std;

/**
 * 选择排序
 */
template <typename T>
void selectionSort(T arr[], int n) {
    for (int i = 0; i < n; i++) {

        // 寻找[i, n)区间里最小值
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }
        swap(arr[i], arr[minIndex]);
    }
}

/* 冒泡排序 */
template<typename T>
void bubbleSort(T arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = n - 1; j >= i; j--)
            if (arr[j] > arr[j + 1])
               swap(arr[j], arr[j+1]);
    }
}
