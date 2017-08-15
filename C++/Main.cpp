#include <iostream>
#include "SortTestHelper.h"
#include "SelectionSort.h"
#include "InsertionSort.h"
#include "MergeSort.h"

using namespace std;

/* 对arr[l...r]部分进行partition操作*/
/* 返回p,使得arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p] */
template <typename T>
int __partition(T arr[], int l, int r) {
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
    if (l >= r) {
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

int main() {
    int n = 50000;
    cout << "Test for Random Array, size = " << n << ", Random range [0, " << n << "]" << endl;
    int *arr1 = SortTestHelper::generateRandomArray(n, 0, n);
    int *arr2 = SortTestHelper::copyIntArray(arr1, n);
    int *arr3 = SortTestHelper::copyIntArray(arr2, n);
    int *arr4 = SortTestHelper::copyIntArray(arr3, n);

    SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
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

    SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, arr2, n);
    SortTestHelper::testSort("Merge Sort Bottom UP", mergeSortBU, arr3, n);
    SortTestHelper::testSort("Quick Sort", quickSort, arr4, n);

    delete[] arr1;
    delete[] arr2;
    delete[] arr3;

    cout << "Hello Wsx" << endl;
}