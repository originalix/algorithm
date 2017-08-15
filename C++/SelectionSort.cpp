#include <iostream>
#include "Student.h"
#include "SortTestHelper.h"

using namespace std;

template <typename T>
void selectionSort(T arr[], int n) {
    for (int i = 0; i < n; i++) {

        // 寻找[i, n]区间里最小值
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }
        swap(arr[i], arr[minIndex]);
    }
}

int main() {
    int n = 10000;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    SortTestHelper::testSort("Selection Sort", selectionSort, arr, n);

    cout << "Hello Wsx" << endl;
    return 0;
}
