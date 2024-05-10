# Find the Smallest Number in a List
# Create a function that takes a list of numbers and returns the smallest number in the list.

# URL:
# https://edabit.com/challenge/ecSZ5kDBwCD3ctjE6

def find_smallest_num(lst):
    sorted_list = sorted(lst)
    return sorted_list[0])

# Using min():
def find_smallest_num(lst):
    return min(lst)