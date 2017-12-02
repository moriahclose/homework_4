# exercise5.py

def calculateTip():
    price = float(input("Enter the price of your meal: "))
    satisfactionLevel = int(input("Rate your satisfaction from 1 (satisfied) to 3 (dissatisfied): "))

    if satisfactionLevel == 1:
        tip = price * .2

    elif satisfactionLevel == 2:
        tip = price * .15

    elif satisfactionLevel == 3:
        tip = price * .1
    else:
        print("Invalid Satisfaction Rating")
        
    print("Customer's Satisfaction: " , satisfactionLevel)
    print("Tip: $" + "%.2f" % tip)
            
calculateTip()
