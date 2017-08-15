#include <iostream>
#include "SortTestHelper.h"

using namespace std;

int main() {
    int n = 100;
    int *arr = SortTestHelper::generateRandomArray(n, 0, n);
    for (int i = 0; i < n; i++)
        cout << arr[i] << endl;

    delete[] arr;
    cout << "Hello Wsx" << endl;
}