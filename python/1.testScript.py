#import math function
import math	
def print_lyrics():
	print( "I'm a lumberjack, and I'm okay.")
	print ("I sleep all night and I work all day.")

def repeat_lyrics():
	print_lyrics()
	print_lyrics()

repeat_lyrics()

#parameterising a function 
def printTwice(funcName):
	print(funcName)
	print(funcName)


#the function assigns the argument to a parameter named funcName.

printTwice(math.pi)
#value of the parameeter is math.pi
