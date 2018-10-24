Option Explicit

wait 1
Browser("好买车").Page("车型详情页").WebEdit("用户手机号码").click

Dim wshShell

Set wshShell = CreateObject("Wscript.Shell")

Dim randomNum
randomNum = RandomNumber(1000,9999)
print "randomNum = "&randomNum
Dim qiqi
qiqi = 1302000
print "qiqi & randomNum = "&qiqi & randomNum
Dim phoneRan
phoneRan = qiqi & randomNum
print "phoneRan = "&phoneRan
wshShell.SendKeys phoneRan

wait 1

Dim userTips

userTips = Browser("好买车").Page("车型详情页").WebElement("老用户提示语").Exist(5)

If userTips Then
	userTips = Browser("好买车").Page("车型详情页").WebElement("老用户提示语").GetROProperty("innertext")
	else
	userTips = Browser("好买车").Page("车型详情页").WebElement("新用户提示语").GetROProperty("innertext")
End If

'userTips = Browser("好买车").Page("车型详情页").WebElement("老用户提示语").GetROProperty("innertext")



print userTips

Dim olduserTips
olduserTips = "好买车会员，欢迎回来"

'StrComp(string1,string2)	
'比较两个字符串，并返回表示比较结果的一个值,返回1,0,-1,1表示大于
'	"beta","alpha"		1
'	"alpha","alpha"		0
'	"alpha","beta"		-1

Dim isOlduser

isOlduser = StrComp(userTips,olduserTips)
print isOlduser
wait 1
Browser("好买车").Page("车型详情页").WebButton("获取验证码").Click
wait 1
	
Dim verifyCode
verifyCode = parameter("verifyCode")

'admin登录

RunAction "12-AdminLogin", oneIteration

'获取验证码
RunAction "13-VerifyCode", oneIteration, phoneRan, isOlduser, verifyCode

wait 3
	
print "verifyCode1 = "&verifyCode

Browser("好买车").Page("车型详情页").WebEdit("输入验证码").click

wait 1
wshShell.SendKeys verifyCode
wait 1

If isOlduser=0 Then

	Browser("好买车").Page("车型详情页").WebButton("确定").Click

	else		
	Browser("好买车").Page("车型详情页").WebEdit("新用户昵称").Click
	wait 1
	Browser("好买车").Page("车型详情页").WebEdit("新用户昵称").Set"自动化1"
	wait 1
	Browser("好买车").Page("车型详情页").WebEdit("新用户昵称").Click
	wait 1
	wshShell.SendKeys "{backspace}"
	wait 1
	Browser("好买车").Page("车型详情页").WebButton("确定").Click
End If

'这里要加时间判断
'Msgbox "当前时间与 "& "00:00:00" &" 相差分钟数 = "& DateDiff("n", "00:00:00", "10:15:00")		615
'Msgbox "当前时间与 "& "00:00:00" &" 相差分钟数 = "& DateDiff("n", "00:00:00", "13:15:00")		795
'Msgbox "当前时间与 "& "00:00:00" &" 相差分钟数 = "& DateDiff("n", "00:00:00", "16:15:00")		975
'Msgbox "当前时间与 "& "00:00:00" &" 相差分钟数 = "& DateDiff("n", "00:00:00", time)
'
'[615,795)之间展示14点,[795,975)展示17点，其他展示11点

'Dim tipsSuccRO
'
'tipsSuccRO = Browser("好买车").Page("车型详情页").WebElement("比价成功页面提示").GetROProperty("innertext")
'
'
'Dim timeInterval
'Dim i
'timeInterval=DateDiff("n", "00:00:00", time)
'print timeInterval 
'Dim tipsSuccTO
'If timeInterval<615 Then
'	i="11:00"
'	tipsSuccTO = "您最迟将于今天上午"&i&"收到报价"
'	ElseIf timeInterval>=615 and timeInterval<795 Then
'	i="14:00"
'	tipsSuccTO = "您最迟将于今天下午"&i&"收到报价"
'	ElseIf timeInterval>=795 and timeInterval<975  Then
'	i="17:00"
'	tipsSuccTO = "您最迟将于今天下午"&i&"收到报价"
'	else
'	i="11:00"
'	tipsSuccTO = "您最迟将于明天上午"&i&"收到报价"
'End If 
'
'print tipsSuccTO
'
''StrComp(string1,string2)	
''比较两个字符串，并返回表示比较结果的一个值,返回1,0,-1,1表示大于
''	"beta","alpha"		1
''	"alpha","alpha"		0
''	"alpha","beta"		-1
'
'Dim isRight
'
'isRight = StrComp(tipsSuccRO,tipsSuccTO)
'print isRight
'
'If isRight=0 Then
'	reporter.ReportEvent micPass,"passed","在"&time&"时报价单在时间点"&i&"会有结果"
'	reporter.ReportEvent micPass,"passed",tipsSuccRO&"<==>"&tipsSuccTO
'	print "pass"
'	else
'	reporter.ReportEvent micFail,"failed","在"&time&"时报价单在时间点"&i&"会有结果"
'	reporter.ReportEvent micFail,"failed",tipsSuccRO&"<==>"&tipsSuccTO
'	print "fail"
'End If
wait 1
Browser("好买车").Page("车型详情页").WebButton("我知道了").Click

'Browser("好买车").Page("比价单列表").Sync
'
'wait 1
'
'Browser("好买车").Page("比价单列表").WebElement("比价单详情入口").Click
'
'Dim orderInnerText
'orderInnerText = Browser("好买车").Page("比价单详情页").WebElement("订单号").GetROProperty("innertext")
'
'Dim orderNo
'orderNo = orderInnerText
'print orderNo

wait 1

SystemUtil.CloseProcessByName "chrome.exe"

wait 1
SystemUtil.Run "chrome.exe","http://m-istage.haomaiche.com/sh/user_center"
'SystemUtil.Run "chrome.exe","http://m-test.haomaiche.com/sh/user_center"


wait 1

Browser("好买车").Page("个人中心").Sync
wait 1
Browser("好买车").Page("个人中心").WebElement("我的信息>").Click

wait 1
Browser("好买车").Page("个人中心-退出").Sync

wait 1
Browser("好买车").Page("个人中心-退出").WebButton("退出登录").Click

SystemUtil.CloseProcessByName "chrome.exe"

'admin登录
'RunAction "12-AdminLogin", oneIteration

'完成订单号比价
'RunAction "14-OderList", oneIteration, orderNo

'Next