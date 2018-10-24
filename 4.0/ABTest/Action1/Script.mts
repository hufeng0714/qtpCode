Option Explicit


Dim Acount
Dim Bcount

Acount = 0
Bcount = 0

Dim Iterator
For Iterator = 1 To 6 Step 1
wait 1
SystemUtil.Run "C:\Users\Victor\Desktop\deletefolder.vbs"
wait 1

SystemUtil.Run "chrome.exe","https://m-test.haomaiche.com/"

wait 1

Browser("好买车-真车实价比出来 让你买车不花冤枉钱").Sync

wait 1

Dim hotbrandA
set hotbrandA = Browser("好买车-真车实价比出来 让你买车不花冤枉钱").Page("好买车-真车实价比出来 让你买车不花冤枉钱").WebElement("热销品牌")

Dim hotbrandB
set hotbrandB = Browser("好买车-真车实价比出来 让你买车不花冤枉钱").Page("好买车-真车实价比出来 让你买车不花冤枉钱_2").WebElement("热销品牌(B)")


If hotbrandA.Exist(0) Then
	
	print "A"
	Acount = Acount + 1
'	print "Acount = "&Acount
'	print "Iterator = "&Iterator
'	print "A占比 ： "&Acount/Iterator*100&"%"
	else
	print "B"
	Bcount = Bcount + 1
'	print "Bcount = "&Bcount
'	print "Iterator = "&Iterator
'	print "B占比 ： "&Bcount/Iterator*100&"%"
End If

	print "Acount = "&Acount
	print "Iterator = "&Iterator
	print "A占比 ： "&Acount/Iterator*100&"%"
	print "====================="
	print "Bcount = "&Bcount
	print "Iterator = "&Iterator
	print "B占比 ： "&Bcount/Iterator*100&"%"

SystemUtil.CloseProcessByName "chrome.exe"

next