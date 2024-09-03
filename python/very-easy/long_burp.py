# Burrrrrrrp
# Create a function that returns the string "Burp" with the amount of "r's"
# determined by the input parameters of the function.

# URL:
# https://edabit.com/challenge/irb783PpFTDqnumhN


def long_burp(num):
    str = "Bu"

    for i in range(num):
        str += "r"

    return str + "p"
