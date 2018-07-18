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
    int capacity;

    void shiftUp( int k ) {
        while (k > 1 && data[k/2] < data[k]) {
            swap( data[k/2], data[k] );
            k /= 2;
        }
    }

    void shiftDown( int k ) {
        while (2*k <= count) {
            int j = 2 * k; // 在此轮循环中,data[k]和data[j]交换位置
            if (j + 1 <= count && data[j] < data[j+1])
                // data[j] 是 data[2*k]和data[2*k+1]中的最大值
                j += 1;
            if (data[k] > data[j])
                break;
            swap( data[k], data[j] );
            k = j;
        }
    }

public:
    // 构造函数, 构造一个空堆, 可容纳capacity个元素
    MaxHeap(int capacity) {
        data = new Item[capacity + 1];
        count = 0;
        this->capacity = capacity;
    }

    MaxHeap(Item arr[], int n) {
        data = new Item[n+1];
        capacity = n + 1;
        for (int i = 0; i < n; i++)
            data[i+1] = arr[i];
        count = n;
        for (int i = count / 2; i >= 1; i--)
            shiftDown(i);
    }

    ~MaxHeap() {
        delete[] data;
    }

    // 返回堆中的元素个数
    int size() {
        return count;
    }

    // 返回一个布尔值, 表示堆中是否为空
    bool isEmpty() {
        return count == 0;
    }

    // 像最大堆中插入一个新的元素 item
    void insert(Item item) {
        assert(count + 1 <= capacity);
        data[ count + 1 ] = item;
        count++;
        shiftUp( count );
    }

    // 从最大堆中取出堆顶元素, 即堆中所存储的最大数据
    Item extractMax() {
        assert(count > 0);

        Item ret = data[1];

        swap( data[1], data[count] );
        count--;

        shiftDown( 1 );

        return ret;
    }

    // 获取最大堆中的堆顶元素
    Item getMax(){
        assert( count > 0 );
        return data[1];
    }
};
