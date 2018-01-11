#include <stdio.h>

void testPoint()
{
    char *s = "helloworld";
    // char *str = "http://c.biancheng.net";
    // printf("%s\n", s);
    printf("%c\n", *(s+5));
}

int main()
{
    testPoint();
    return 0;
}
