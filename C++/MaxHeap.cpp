#include <iostream>
#include <algorithm>
#include <string>
#include <ctime>
#include <cmath>
#include <cassert>

using namespace std;

template <typename Item>
class MaxHeap {

private:
    Item *data;
    int count;

public:
    MaxHeap(int capacity) {
        data = new Item[capacity + 1];
        count = 0;
    }

    ~MaxHeap() {
        delete[] data;
    }
};

int main() {

    cout << "Hello wsx" << endl;
    return 0;
}