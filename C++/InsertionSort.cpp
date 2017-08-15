#include <iostream>
#include "SortTestHelper.h"

using namespace std;

template<typename T>
void insertionSort(T arr[], int n) {

    for (int i = 1; i < n; i++) {
        // 寻找元素arr[i]合适的插入位置
        for (int j = i; j > 0 && arr[j] < arr[j-1]; j--) {
            swap(arr[j], arr[j-1]);
        }
    }
}

int main() {
    int n = 10000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);



    delete[] arr;
    cout << "Hello Wsx" << endl;
    return 0;
}