#include <iostream>
#include "SortTestHelper.h"
#include "SelectionSort.h"
#include "InsertionSort.h"
#include "MergeSort.h"
#include "QuickSort.h"
#include "Heap.h"

using namespace std;

template<typename T>
void heapSort1(T arr[], int n) {
    MaxHeap<T> maxheap = MaxHeap<T>(n);
    for (int i = 0; i < n; i++) {
        maxheap.insert(arr[i]);
    }

    for (int i = n - 1; i >= 0; i--) {
        arr[i] = maxheap.extractMax();
    }
}

template<typename T>
void heapSort2(T arr[], int n) {
    MaxHeap<T> maxheap = MaxHeap<T>(arr, n);
    for (int i = n - 1; i >= 0; i--) {
        arr[i] = maxheap.extractMax();
    }
}

int main() {
    int n = 1000000;
    cout << "Test for Random Array, size = " << n << ", Random range [0, " << n << "]" << endl;
    int *arr1 = SortTestHelper::generateRandomArray(n, 0, 10);
    int *arr2 = SortTestHelper::copyIntArray(arr1, n);
    int *arr3 = SortTestHelper::copyIntArray(arr2, n);
    int *arr4 = SortTestHelper::copyIntArray(arr3, n);
    int *arr5 = SortTestHelper::copyIntArray(arr4, n);
    int *arr6 = SortTestHelper::copyIntArray(arr5, n);

    // SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, arr2, n);
    SortTestHelper::testSort("Merge Sort Bottom UP", mergeSortBU, arr3, n);
    // SortTestHelper::testSort("Quick Sort", quickSort, arr4, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, arr1, n);
    SortTestHelper::testSort("Quick Sort 3 Ways", quickSort3Ways, arr5, n);
    SortTestHelper::testSort("heapSort1", heapSort1, arr4, n);
    SortTestHelper::testSort("heapSort2", heapSort2, arr6, n);

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
    arr6 = SortTestHelper::copyIntArray(arr5, n);

    // SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, arr2, n);
    SortTestHelper::testSort("Merge Sort Bottom UP", mergeSortBU, arr3, n);
    // SortTestHelper::testSort("Quick Sort", quickSort, arr4, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, arr1, n);
    SortTestHelper::testSort("Quick Sort 3 Ways", quickSort3Ways, arr5, n);
    SortTestHelper::testSort("heapSort1", heapSort1, arr4, n);
    SortTestHelper::testSort("heapSort2", heapSort2, arr6, n);

    delete[] arr1;
    delete[] arr2;
    delete[] arr3;
    delete[] arr4;
    delete[] arr5;

    cout << "Hello Wsx" << endl;
}