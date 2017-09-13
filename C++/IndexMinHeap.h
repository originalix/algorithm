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

    void shiftUp( int k ) {
        while ( k > 1 && data[indexes[k/2]] > data[indexes[k]]) {
            swap( indexes[k/2], indexes[k]);
            reverse[indexes[k/2]] = k/2;
            reverse[indexes[k]] = k;
            k /= 2;
        }
    }

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


};