#include <iostream>
#include "SortTestHelper.h"
#include "SelectionSort.h"
#include "InsertionSort.h"
#include "MergeSort.h"
#include "QuickSort.h"

using namespace std;

/* 从数组两端 l+1 与 r 向中间扫描*/
/* 对arr[l...r]部分进行partition操作 */
/* 返回p,使得arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p] */
template <typename T>
int __partition2(T arr[], int l, int r) {

    /* 优化点2: 使用随机元素 作用 针对近乎有序的数组 */
    swap(arr[l], arr[rand()%(r-l+1)+l]);

    T v = arr[l];

    // arr[l+1...j] <= v; arr[j...r] >= v
    int i = l + 1, j = r;

    while(true) {
        while(i <= r && arr[i] < v) i++;
        while(j >= l+1 && arr[j] > v) j--;
        if (i > j) break;
        swap (arr[i], arr[j]);
        i++;
        j--;

    }

    swap(arr[l], arr[j]);

    return j;
}

/* 对arr[l...r]部分进行快速排序 */
template <typename T>
void __quickSort2(T arr[], int l, int r) {
    // if (l >= r) {
    //     return;
    // }

    /* 优化点1： 小于16个数据时 改用插入排序 */
    if (r - l <= 15) {
        insertionSort(arr, l, r);
        return;
    }

    int p = __partition2(arr, l, r);
    __quickSort2(arr, l, p-1);
    __quickSort2(arr, p+1, r);
}

template <typename T>
void quickSort2(T arr[], int n) {
    __quickSort2(arr, 0, n-1);
}

int main() {
    int n = 5000;
    cout << "Test for Random Array, size = " << n << ", Random range [0, " << n << "]" << endl;
    int *arr1 = SortTestHelper::generateRandomArray(n, 0, n);
    int *arr2 = SortTestHelper::copyIntArray(arr1, n);
    int *arr3 = SortTestHelper::copyIntArray(arr2, n);
    int *arr4 = SortTestHelper::copyIntArray(arr3, n);

    // SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, arr2, n);
    SortTestHelper::testSort("Merge Sort Bottom UP", mergeSortBU, arr3, n);
    SortTestHelper::testSort("Quick Sort", quickSort, arr4, n);

    delete[] arr1;
    delete[] arr2;
    delete[] arr3;

    cout<<endl;

    int swapTimes = 1000;
    cout << "Test for Random Nearly Ordered Array, size = " << n << ", swap time = " << swapTimes << ", Random range [0, " << n << "]" << endl;

    arr1 = SortTestHelper::generateNearlyOrderedArray(n, swapTimes);
    arr2 = SortTestHelper::copyIntArray(arr1, n);
    arr3 = SortTestHelper::copyIntArray(arr2, n);
    arr4 = SortTestHelper::copyIntArray(arr3, n);

    // SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, arr2, n);
    SortTestHelper::testSort("Merge Sort Bottom UP", mergeSortBU, arr3, n);
    SortTestHelper::testSort("Quick Sort", quickSort, arr4, n);

    delete[] arr1;
    delete[] arr2;
    delete[] arr3;

    cout << "Hello Wsx" << endl;
}