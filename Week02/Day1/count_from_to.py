# Create a program that asks for two numbers
# If the second number is not bigger than the first one it should print:
# "The second number should be bigger"
#
# If it is bigger it should count from the first number to the second by one
# 
# example:
#
# first number: 3, second number: 6, should print:
#
# 3
# 4
# 5
#until before the second number

a = int(input("Give me a number: "))
b = int(input("Give me another number: "))

def counter(a, b):
    if b < a:
        print("The second number should be bigger!")
    else:
        while a < b:
            print(a)
            a += 1

counter(a,b)

