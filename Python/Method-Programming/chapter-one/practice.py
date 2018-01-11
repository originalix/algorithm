#!/usr/bin/env python
# -*- coding: utf-8 -*-

# 编程之法 第一章——字符串 本章习题

def string_reverse(string):
    """1.1 字符串的反转

    Arguments:
        string {String} -- 需要反转的字符串
    """
    reverse_str = []
    for i in range(len(string)-1, -1, -1):
        reverse_str.append(string[i])
    s = ''.join(reverse_str)
    return s

print string_reverse('hello world')
