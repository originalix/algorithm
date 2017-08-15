#include <iostream>
#include "SortTestHelper.h"

using namespace std;

template<typename T>
void __mergeSort(T arr[], int l, int r) {
    if (l >= r)
        return;
    int mid = (l + r) / 2;
    __mergeSort(arr, l, mid);
    __mergeSort(arr, mid + 1, r);
    __merge(arr, l, mid, r);
}

template<typename T>
void mergeSort(T arr[], int n) {
    __mergeSort(arr, 0, n-1);
}

int main() {
    int n = 100;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    SortTestHelper::printArray(arr, n);

    delete[] arr;
    cout << "Hello Wsx" << endl;
}