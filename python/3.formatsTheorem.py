prompta="enter value of a: "

a=input(prompta)


promptb="enter value of b: "

b=input(promptb)



promptc="enter value of c: "

c=input(promptc)


promptn="enter value of n: "

n=input(promptn)
x=n+1
print (X)

def format(a,b,c,n):
	print(a+1,b,c,n)	
	if n>2 and a>2 and b>2 and c>2:
		print ("true")
		if math.pow(a,n)+math.pow(b,n)==math.pow(c,n):
			print("holy smoke ,Format was a wrong")
			print(a,b,c,n)
		else:
			print("format was great")
			print(a,b,c,n)


format(a,b,c,n)

