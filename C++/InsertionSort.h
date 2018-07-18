#include <iostream>

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

template<typename T>
void insertionSort(T arr[], int l, int r) {
    int n = r - l + 1;
    for (int i = l + 1; i <= r; i++) {
        T e = arr[i];
        int j;
        for (j = i; j > l && arr[j-1] > e; j--) {
            arr[j] = arr[j-1];
        }
        arr[j] = e;
    }
}
