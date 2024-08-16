# Two Makes Ten
# Create a function that takes two arguments. Both arguments are integers, a and b.
# Return True if one of them is 10 or if their sum is 10.


# URL:
# https://edabit.com/challenge/HuWQaCpFR7iTeCvTm


def makes_10(a, b):
    if a == 10 or b == 10:
        return True
    elif a + b == 10:
        return True
    else:
        return False


# Using ternary operator:
def makes_10(a, b):
    return True if a == 10 or b == 10 or a + b == 10 else False
