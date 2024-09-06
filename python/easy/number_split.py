# Number Split
# Given a number, return a list containing the two halves of the number. If the number is odd, make the rightmost number higher.

# URL:
# https://edabit.com/challenge/9f3Mi6vHNcm8vRcSh


def number_split(n):
    if n % 2 == 0:
        return [n / 2, n / 2]
    else:
        return [n / 2, (n / 2) + 1]
