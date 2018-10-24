Option Explicit
'
'Dim i
'dim j
'dim k
'dim m
'For i = 1 To 11 Step 2
'	For j = i+2 To 13 Step 2
'		For k = j+2 To 15 Step 2
'			
'	m=i+j+k
'	if m=30 then
'	print i
'	print j
'	print k
'	end if
'		next
'	next
'next

Dim Iterator
For Iterator = 1 To 10 Step 1

Dim randomNum

randomNum = RandomNumber(0,3)

print randomNum

Next
