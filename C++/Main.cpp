#include <iostream>
#include "SortTestHelper.h"

using namespace std;

int main() {
    int n = 100;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    SortTestHelper::printArray(arr, n);

    delete[] arr;
    cout << "Hello Wsx" << endl;
}