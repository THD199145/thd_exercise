year = int(input("year:\n"))
month = int(input("month:\n"))
date = int(input("date:\n"))

months = (0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334)

if 1 <= month <= 12:
    sum = months[month - 1]
else:
    print("data error")

sum += date

if (year % 400 == 0) or ((year % 4 == 0) and (year % 100 ==0)):
    if month >= 2:
        sum += 1

print("have", sum)