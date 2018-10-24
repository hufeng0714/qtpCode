Option Explicit
print "start"
Dim strMessA
Dim strMessB
Dim strMess
Dim strMessC
strMessC = "我是一个返回的参数"
parameter("strMessC")=strMessC
'接参
strMessA = parameter("strMessA")
msgbox(strMessA)
strMessB = parameter("strMessB")
msgbox(strMessB)
strMess = strMessA&strMessB

msgbox(strMess)
print "end"