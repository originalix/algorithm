#include <iostream>
#include <vector>
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
    Node *root;
    int count;

public:
    BST() {
        root = NULL;
        count = 0;
    }

    ~BST() {
        // TODO:
    }

    int size() {
        return count;
    }

    int isEmpty() {
        return count == 0;
    }

    void insert(Key key, Value value) {
        root = insert(root, key, value);
    }

    bool contain(Key key) {
        return contain(root, key);
    }

    Value* search(Key key) {
        return search(root, key);
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
};

int main() {

    //使用圣经作为我们的测试用例
    string filename = "bible.txt";
    vector<string> words;
    if (FileOps::readFile(filename, words)) {
        cout << "There are totally" << words.size() << "words in" << filename << endl;
        cout << endl;

        time_t startTime = clock();

        BST<string, int>bst = BST<string, int>();
        for (vector<string>::iterator iter = words.begin(); iter != words.end(); iter++) {
            int *res = bst.search(*iter);
            if (res == NULL)
                bst.insert(*iter, 1);
            else
                (*res)++;
        }

        if (bst.contain("god"))
            cout << "'god' : " << *bst.search("god") << endl;
        else
            cout << "No word 'god' in " << filename << endl;
        
        time_t endTime = clock();

        cout << "BST, time: " << double(endTime - startTime) / CLOCKS_PER_SEC << "s." << endl;
        cout << endl;
    }
}
