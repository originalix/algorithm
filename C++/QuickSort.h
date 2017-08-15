#include <iostream>

using namespace std;

/* 从arr[l]开始 向r方向进行扫描 */
/* 对arr[l...r]部分进行partition操作 */
/* 返回p,使得arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p] */
template <typename T>
int __partition(T arr[], int l, int r) {

    /* 优化点2: 使用随机元素 作用 针对近乎有序的数组 */
    swap(arr[l], arr[rand()%(r-l+1)+l]);

    T v = arr[l];

    // arr[l+1...j] < v; arr[j+1...r] > v
    int j = l;
    for (int i = l + 1; i <= r; i++) {
        if (arr[i] < v) {
            swap(arr[j + 1], arr[i]);
            j++;
        }
    }

    swap(arr[l], arr[j]);

    return j;
}

/* 对arr[l...r]部分进行快速排序 */
template <typename T>
void __quickSort(T arr[], int l, int r) {
    // if (l >= r) {
    //     return;
    // }

    /* 优化点1： 小于16个数据时 改用插入排序 */
    if (r - l <= 15) {
        insertionSort(arr, l, r);
        return;
    }

    int p = __partition(arr, l, r);
    __quickSort(arr, l, p-1);
    __quickSort(arr, p+1, r);
}

template <typename T>
void quickSort(T arr[], int n) {
    __quickSort(arr, 0, n-1);
}
