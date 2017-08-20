#include <iostream>

using namespace std;

template<typename T>
void binarySearch(T arr[], int n, int target) {
    int l = 0, r = n - 1;
    while(l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == target)
            return mid;
        if (arr[mid] < target)
            r = mid - 1;
        if (arr[mid] > target)
            l = mid + 1;
    }

    return -1;
}

int main() {
}
