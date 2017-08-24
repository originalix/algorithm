#include <iostream>
#include <vector>
#include <queue>
#include <ctime>
#include <string>
#include "FileOps.h"

using namespace std;

template<typename T>
int binarySearch(T arr[], int n, int target) {
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

template<typename Key, typename Value>
class BST {

private:
    // 树中的节点为私有的结构体, 外界不需要了解二分搜索树节点的具体实现
    struct Node {
        Key key;
        Value value;
        Node *left;
        Node *right;

        Node(Key key, Value value) {
            this->key = key;
            this->value = value;
            this->left = this->right = NULL;
        }
    };
    Node *root;  // 根节点
    int count;   // 树中的节点个数

public:
    // 构造函数, 默认构造一棵空二分搜索树
    BST() {
        root = NULL;
        count = 0;
    }

    // 析构函数, 释放二分搜索树的所有空间
    ~BST() {
        destroy(root);
    }

    // 返回二分搜索树的节点个数
    int size() {
        return count;
    }

    // 返回二分搜索树是否为空
    bool isEmpty() {
        return count == 0;
    }

    // 向二分搜索树中插入一个新的(key, value)数据对
    void insert(Key key, Value value) {
        root = insert(root, key, value);
    }

    // 查看二分搜索树中是否存在键key
    bool contain(Key key) {
        return contain(root, key);
    }

    // 在二分搜索树中搜索键key所对应的值，如果这个值不存在，则返回null
    Value* search(Key key) {
        return search(root, key);
    }

    // 二分搜索树的前序遍历
    void preOrder() {
        preOrder(root);
    }

    // 二分搜索树的中序遍历
    void inOrder() {
        inOrder(root);
    }

    // 二分搜索树的后序遍历 
    void postOrder() {
        postOrder(root);
    }

    // 二分搜索树的层序遍历
    void levelOrder() {
        queue<Node*> q;
        
        q.push( root );

        while ( !q.empty() ) {
            Node *node = q.front();
            q.pop();

            cout << node->key << endl;

            if (node->left)
                q.push( node->left );
            if (node->right)
                q.push( node->right );
        }
    }

    // 寻找二分搜索树的最小的键值
    Key minimum() {
        assert (count != 0);
        Node *minNode = minimum( root );
        return minNode->key;
    }

    // 寻找二分搜索树的最大的键值
    Key maximum() {
        assert (count != 0);
        Node *maxNode = maximum( root );
        return maxNode->key;
    }

    // 从二分搜索树中删除最小值所在节点
    void removeMin() {
        if (root)
            root = removeMin( root );
    }

    // 从二分搜索树中删除最大值所在节点
    void removeMax() {
        if (root)
            root = removeMax( root );
    }

private:
    Node* insert(Node *node, Key key, Value value) {
        if (node == NULL) {
            count++;
            return new Node(key, value);
        }
        if (key == node->key)
            node->value = value;
        else if (key < node->key)
            node->left = insert(node->left, key, value);
        else
            node->right = insert(node->right, key, value);
        return node;
    }

    bool contain(Node *node, Key key) {
        if (node == NULL)
            return false;

        if (key == node->key)
            return true;
        else if (key < node->key)
            return contain(node->left, key);
        else
            return contain(node->right, key);
    }

    Value* search(Node *node, Key key) {

        if (node == NULL)
            return NULL;

        if (key == node->key)
            return &(node->value);
        else if (key < node->key)
            return search(node->left, key);
        else
            return search(node->right, key);
    }

    void preOrder(Node* node) {
        if (node != NULL) {
            cout << node->key << endl;
            preOrder(node->left);
            preOrder(node->right);
        }
    }

    void inOrder(Node* node) {
        if (node != NULL) {
            inOrder(node->left);
            cout << node->key << endl;
            inOrder(node->right);
        }
    }

    void postOrder(Node* node) {
        if (node != NULL) {
            postOrder(node->left);
            postOrder(node->right);
            cout << node->key << endl;
        }
    }

    void destroy(Node* node) {
        if (node != NULL) {
            destroy(node->left);
            destroy(node->right);

            delete node;
            count--;
        }
    }

    Node* minimum(Node* node) {
        if (node->left == NULL)
            return node;
        return minium(node->left);
    }

    Node* maximum(Node* node) {
        if (node->right == NULL)
            return node;
        return maximum(node->right);
    }

    Node* removeMin(Node* node) {
        if (node->left == NULL) {
            Node *rightNode = node->right;
            delete node;
            count--;
            return rightNode;
        }
        node->left = removeMin(node->left);
        return node;
    }

    Node* removeMax(Node* node) {
        if (node->right == NULL) {
            Node *leftNode = node->left;
            delete node;
            count--;
            return leftNode;
        }
        node->right = removeMax(node->right);
        return node;
    }
};

int main() {

    srand(time(NULL));
    BST<int, int> bst = BST<int, int>();

    // 取N个取值范围在[0...M)的随机数放进二叉搜索树中
    int N = 10;
    int M = 100;
    for (int i = 0; i < N; i++) {
        int key = rand() % M;
        int value = key;

        cout << key << " ";
        bst.insert(key, value);
    }
    cout << endl;
    
    
    cout << "Hello wsx" << endl;

    // 测试二叉搜索树的size
    cout << "total size : " << bst.size() << endl;

    // 测试二分搜索树的前序遍历 preOrder
    cout << "preOrder : " << endl;
    bst.preOrder();
    cout << endl;

    // 测试二分搜索树的中序遍历 inOrder
    cout<<"inOrder: "<<endl;
    bst.inOrder();
    cout<<endl;

    // 测试二分搜索树的后序遍历 postOrder
    cout<<"postOrder: "<<endl;
    bst.postOrder();
    cout<<endl;

    return 0;
}
