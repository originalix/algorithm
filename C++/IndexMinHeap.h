#include <iostream>
#include <algorithm>
#include <cassert>

using namespace std;

template <typename Item>
class IndexMinHeap {
private:
    Item *data;    // 最小索引堆中的数据
    int *indexes;  // 最小索引堆中的索引，index[x] = i 表示索引i在x的位置
    int *reverse;  // 最小索引堆中的反向索引，reverse[i] = x 表示索引i在x的位置

    int count;     // 最小索引堆当前元素个数
    int capacity;  // 最小索引堆的空间大小

    // 索引堆中, 数据之间的比较根据data的大小进行比较, 但实际操作的是索引
    void shiftUp( int k ) {
        while ( k > 1 && data[indexes[k/2]] > data[indexes[k]]) {
            swap( indexes[k/2], indexes[k]);
            reverse[indexes[k/2]] = k/2;
            reverse[indexes[k]] = k;
            k /= 2;
        }
    }

    // 索引堆中, 数据之间的比较根据data的大小进行比较, 但实际操作的是索引
    void shiftDown( int k ) {
        while ( 2*k <= count ) {
            int j = 2*k;
            if (j+1 <= count && data[ indexes[j] ] > data[ indexes[j+1] ])
                j += 1;

            if ( data[ indexes[k] ] <= data[ indexes[j] ] )
                break;
            
            swap( indexes[k], indexes[j] );
            reverse[ indexes[k] ] = k;
            reverse[ indexes[j] ] = j;
            k = j;
        }
    }

public:
    IndexMinHeap( int capacity ) {
        data = new Item[capacity + 1];
        indexes = new int[capacity + 1];
        reverse = new int[capacity + 1];

        for (int i = 0; i <= capacity; i++) {
            reverse[i] = 0;
        }

        count = 0;
        this->capacity = capacity;
    }

    ~IndexMinHeap() {
        delete[] data;
        delete[] indexes;
        delete[] reverse;
    }

    int size() {
        return count;
    }

    bool isEmpty() {
        return count == 0;
    }

    void insert( int index, Item item ) {
        assert( count + 1 <= capacity );
        assert( index + 1 >= 1 && index + 1 <= capacity);

        index += 1;
        data[index] = item;
        indexes[ count + 1] = index;
        reverse[ index ] = count + 1;
        count++;
        shiftUp(count);
    }

    Item extracMin() {
        assert (count > 0);
        Item ret = data[ indexes[1] ];
    }
};
