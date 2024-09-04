# Let's Sort This List!
# Create a function that takes a list of numbers lst, a string s and return a list of numbers as per the following rules:
# - "Asc" returns a sorted list in ascending order.
# - "Des" returns a sorted list in descending order.
# - "None" returns a list without any modification.

# URL:
# https://edabit.com/challenge/NM8JbG5K2ajKjkqpj


def asc_des_none(lst, s):
    if s == "Asc":
        return lst.sort()
    elif s == "Des":
        return lst.sort(reverse=True)
    else:
        return lst
