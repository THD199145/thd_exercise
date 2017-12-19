s = str(input("input a string:\n"))

letters = 0
digit = 0
others = 0
space = 0

for c in s:
    if c.isalpha():
        letters += 1
    elif c.isdigit():
        digit += 1
    elif c.isspace():
        space += 1
    else:
        others += 1

print(letters, digit, others, space)