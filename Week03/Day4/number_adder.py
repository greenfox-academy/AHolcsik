# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

num = 4

def number_adder(num):
    if num == 0:
        return(num)
    else:
        return(num + number_adder(num-1))

print(number_adder(num))