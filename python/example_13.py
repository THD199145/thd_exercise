for i in range(100, 1000):
    a = int(i / 100)
    b = int(i / 10 % 10)
    c = int(i % 10)
    if i == a ** 3 + b ** 3 + c ** 3:
        print("%-5d" % (i))