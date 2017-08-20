#include <iostream>
#include "SortTestHelper.h"
#include "SelectionSort.h"
#include "InsertionSort.h"
#include "MergeSort.h"
#include "QuickSort.h"
#include "HeapSort.h"
#include "IndexMaxHeap.h"

using namespace std;

template<typename T>
void heapSortUsingIndexMaxHeap(T arr[], int n) {
    IndexMaxHeap<T> indexMaxHeap = IndexMaxHeap<T>(n);
    for (int i = 0; i < n; i++) {
        indexMaxHeap.insert(i, arr[i]);
    }

    assert( indexMaxHeap.testIndexesAndReverseIndexes() );

    for (int i = n - 1; i >= 0; i--) {
        arr[i] = indexMaxHeap.extractMax();
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
    int *arr7 = SortTestHelper::copyIntArray(arr6, n);

    // SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, arr2, n);
    SortTestHelper::testSort("Merge Sort Bottom UP", mergeSortBU, arr3, n);
    // SortTestHelper::testSort("Quick Sort", quickSort, arr4, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, arr1, n);
    SortTestHelper::testSort("Quick Sort 3 Ways", quickSort3Ways, arr5, n);
    SortTestHelper::testSort("heapSort1", heapSort1, arr4, n);
    SortTestHelper::testSort("heapSort2", heapSort2, arr6, n);
    SortTestHelper::testSort("heapSort3", heapSort3, arr7, n);

    delete[] arr1;
    delete[] arr2;
    delete[] arr3;
    delete[] arr4;
    delete[] arr5;
    delete[] arr6;
    delete[] arr7;

    cout<<endl;

    int swapTimes = 1000;
    cout << "Test for Random Nearly Ordered Array, size = " << n << ", swap time = " << swapTimes << ", Random range [0, " << n << "]" << endl;

    arr1 = SortTestHelper::generateNearlyOrderedArray(n, swapTimes);
    arr2 = SortTestHelper::copyIntArray(arr1, n);
    arr3 = SortTestHelper::copyIntArray(arr2, n);
    arr4 = SortTestHelper::copyIntArray(arr3, n);
    arr5 = SortTestHelper::copyIntArray(arr4, n);
    arr6 = SortTestHelper::copyIntArray(arr5, n);
    arr7 = SortTestHelper::copyIntArray(arr6, n);

    // SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, arr2, n);
    SortTestHelper::testSort("Merge Sort Bottom UP", mergeSortBU, arr3, n);
    // SortTestHelper::testSort("Quick Sort", quickSort, arr4, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, arr1, n);
    SortTestHelper::testSort("Quick Sort 3 Ways", quickSort3Ways, arr5, n);
    SortTestHelper::testSort("heapSort1", heapSort1, arr4, n);
    SortTestHelper::testSort("heapSort2", heapSort2, arr6, n);
    SortTestHelper::testSort("heapSort3", heapSort3, arr7, n);

    delete[] arr1;
    delete[] arr2;
    delete[] arr3;
    delete[] arr4;
    delete[] arr5;
    delete[] arr6;
    delete[] arr7;

    cout << "Hello Wsx" << endl;
}
