from math import sqrt

leap = 1

for i in range(101, 201):
    k = int(sqrt(i))
    for j in range(2, k + 1):
        if i % j == 0:
            leap = 0
            break
    if leap == 1:
        print("%-4d" % (i))
    leap = 1
