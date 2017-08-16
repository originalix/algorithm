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

    void shiftUp( int k ) {
        while(k > 1 && data[k/2] < data[k]) {
            swap( data[k/2], data[k] );
            k /= 2;
        }
    }

public:
    MaxHeap(int capacity) {
        data = new Item[capacity + 1];
        count = 0;
    }

    ~MaxHeap() {
        delete[] data;
    }

    int size() {
        return count;
    }

    bool isEmpty() {
        return count == 0;
    }

    void insert(Item item) {
        data[ count + 1 ] = item;
        count++;
        shiftUp( count );
    }
};

int main() {
    MaxHeap<int> maxheap = MaxHeap<int>(100);
    cout << maxheap.size() << endl;
    cout << "Hello wsx" << endl;
    return 0;
}