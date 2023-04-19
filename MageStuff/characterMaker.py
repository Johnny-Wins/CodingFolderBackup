from variousOptionObjects import *
charactermode = 0 #if charactermode is 0, create a character by grabbing user inputs. If charactermode is 1, create a character randomly.

def menu():
    print("Now running character maker")
    charactermode = (int(input("Please input:\n1. Create a character yourself\n2. Generate a character randomly\n\n")) - 1)

    if charactermode == 0:
        userCharacter()
    if charactermode == 1:
        randomCharacter()

def userCharacter():
    charName = input("First, what is this character's name?")
    charDoc = open(charName, "xt")

    

    charDoc.close()

def randomCharacter():
    "donothing"

menu()