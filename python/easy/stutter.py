# Stuttering Function
# Write a function that stutters a word as if someone is struggling to read it. The first two letters
# are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

# URL:
# https://edabit.com/challenge/gt9LLufDCMHKMioh2


def stutter(word):
    str = ""

    for i in range(2):
        str += word[:2] + "... "

    return str + word + "?"
