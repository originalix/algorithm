#include <iostream>

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
    int a[10] = {1, 34, 21, 1250, 21, 5021, 1201, 33, 121, 210};
    selectionSort(a, 10);
    for (int i = 0; i < 10; i++) {
        cout << a[i] << " ";
        cout << endl;
    }

    float b[4] = {2.1, 21.50, 12.01, 52.21};
    selectionSort(b, 4);
    for (int i = 0; i < 4; i++) {
        cout << b[i] << " ";
        cout << endl;
    }
    cout << "Hello Wsx" << endl;
    return 0;
}