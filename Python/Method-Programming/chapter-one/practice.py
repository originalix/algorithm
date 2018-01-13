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

def string_move(string):
    """1.2 字符串的左右移动
    
    Arguments:
        string {String} -- 被移动的字符串
    """
    strlist = list(string)
    point = len(string) - 1
    let = len(string) - 1

    while (point != 0) and (let != 0):
        while strlist[point] != '*' and point != 0:
            point -= 1
        if point == 0:
            return string
        let = point
        while strlist[let] == '*' and let != 0:
            let -= 1
        while strlist[let] != '*' and strlist[point] == '*':
            strlist[let], strlist[point] = strlist[point], strlist[let]
            if point != 0:
                point -= 1
            if let != 0:
                let -= 1
    return ''.join(strlist)
        
print string_move('********a***b*c')
