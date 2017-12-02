#exercise7.py
import math

def willBreak( v ):
    
    T = (2 * (v ** 2)) / 3

    if T > 60:
        print("The string will break")
    else:
        print("The string will stay intact")

