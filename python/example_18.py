from functools import reduce

Tn = 0
Sn = 0

n = int(input("n = ?\n"))
value = int(input("value = ?\n"))

for count in range(n):
    Tn = Tn + value
    value = value * 10
    Sn += Tn
    print(Tn)

# Sn = reduce(lambda x, y : x + y, Sn)

print(Sn)

