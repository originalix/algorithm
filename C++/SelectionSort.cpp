#include <iostream>

using namespace std;

void selectionSort(int arr[], int n) {
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
    int a[10] = {1, 34, 21, 1250, 21, 5021, 1201, 33, 121, 210};
    selectionSort(a, 10);
    for (int i = 0; i < 10; i++) {
        cout << a[i] << " ";
        cout << endl;
    }

    cout << "Hello Wsx" << endl;
    return 0;
}