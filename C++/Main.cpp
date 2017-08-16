#include <iostream>
#include "SortTestHelper.h"
#include "SelectionSort.h"
#include "InsertionSort.h"
#include "MergeSort.h"
#include "QuickSort.h"

using namespace std;

template <typename T>
void __quickSort3Ways(T arr[], int l, int r) {
    if (r - l <= 15) {
        insertionSort(arr, l, r);
        return;
    }

    swap(arr[l], arr[rand()%(r-l+1)+l]);
    T v = arr[l];

    int lt = l;  // arr[l+1...lt] < v
    int gt = r + 1;  //arr[gt...r] > v
    int i = l + 1; // arr[lt+1...i) == v

    while(i < gt) {
         if (arr[i] < v) { // arr[i] < v
            swap(arr[i], arr[lt+1]);
            lt++;
            i++;
         }
         else if (arr[i] > v) { // arr[i] > v
            swap(arr[i], arr[gt-1]);
            gt--;
         }
         else { // arr[i] == v
            i++;
         }
    }

    swap(arr[l], arr[lt]);
    __quickSort3Ways(arr, l, lt-1);
    __quickSort3Ways(arr, gt, r);
}

template <typename T>
void quickSort3Ways(T arr[], int n) {
    __quickSort3Ways(arr, 0, n-1);
}

int main() {
    int n = 500000;
    cout << "Test for Random Array, size = " << n << ", Random range [0, " << n << "]" << endl;
    int *arr1 = SortTestHelper::generateRandomArray(n, 0, 10);
    int *arr2 = SortTestHelper::copyIntArray(arr1, n);
    int *arr3 = SortTestHelper::copyIntArray(arr2, n);
    int *arr4 = SortTestHelper::copyIntArray(arr3, n);
    int *arr5 = SortTestHelper::copyIntArray(arr4, n);

    // SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, arr2, n);
    SortTestHelper::testSort("Merge Sort Bottom UP", mergeSortBU, arr3, n);
    SortTestHelper::testSort("Quick Sort", quickSort, arr4, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, arr1, n);
    SortTestHelper::testSort("Quick Sort 3 Ways", quickSort3Ways, arr5, n);

    delete[] arr1;
    delete[] arr2;
    delete[] arr3;
    delete[] arr4;
    delete[] arr5;

    cout<<endl;

    int swapTimes = 1000;
    cout << "Test for Random Nearly Ordered Array, size = " << n << ", swap time = " << swapTimes << ", Random range [0, " << n << "]" << endl;

    arr1 = SortTestHelper::generateNearlyOrderedArray(n, swapTimes);
    arr2 = SortTestHelper::copyIntArray(arr1, n);
    arr3 = SortTestHelper::copyIntArray(arr2, n);
    arr4 = SortTestHelper::copyIntArray(arr3, n);
    arr5 = SortTestHelper::copyIntArray(arr4, n);

    // SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, arr2, n);
    SortTestHelper::testSort("Merge Sort Bottom UP", mergeSortBU, arr3, n);
    SortTestHelper::testSort("Quick Sort", quickSort, arr4, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, arr1, n);
    SortTestHelper::testSort("Quick Sort 3 Ways", quickSort3Ways, arr5, n);

    delete[] arr1;
    delete[] arr2;
    delete[] arr3;
    delete[] arr4;
    delete[] arr5;

    cout << "Hello Wsx" << endl;
}
