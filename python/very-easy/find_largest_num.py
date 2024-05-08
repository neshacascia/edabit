# Find the Largest Number in a List
# Create a function that takes a list of numbers. Return the largest number in the list.

# URL:
# https://edabit.com/challenge/A7hyDnb72prWryeuY

def findLargestNum(nums):
    sorted_list = sorted(nums)
    return sorted_list[-1]

# Using max():
def findLargestNum(nums):
    return max(nums)



