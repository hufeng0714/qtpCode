Option Explicit

SystemUtil.Run "IExplore.exe","http://oms-test.haomaiche.com/admin/login.html" 

Browser("管理后台系统界面").Page("管理后台系统界面").Sync
Browser("管理后台系统界面").Page("管理后台系统界面").WebEdit("用户名输入框").Set "admin"
Browser("管理后台系统界面").Page("管理后台系统界面").WebEdit("密码输入框").Set "Hmc1234"
Browser("管理后台系统界面").Page("管理后台系统界面").Image("登录按钮").Click
wait 3
Browser("管理后台系统界面").Page("系统主界面").Sync
Browser("管理后台系统界面").Page("系统主界面").WebElement("订单管理-菜单").Click
wait 1
Browser("管理后台系统界面").Page("系统主界面").Link("待报报价单-订单管理").Click
wait 3
Dim orderNo
orderNo = parameter("orderNo")
wait 3
Browser("管理后台系统界面").Page("系统主界面").Frame("比价单列表框架").WebEdit("询价单号").Set orderNo
wait 1
Browser("管理后台系统界面").Page("系统主界面").Frame("比价单列表框架").WebElement("查询按钮").Click
wait 2
Dim objTbl2
set objTbl2 = Browser("管理后台系统界面").Page("系统主界面").Frame("比价单列表框架").WebTable("待报报价单列表")

'
Dim tblVal2
tblVal2 = objTbl2.GetCellData(1,1)
'print tblVal2
'
If orderNo=tblVal2 Then
	print "pass"
	reporter.ReportEvent micPass,"passed",tblVal2&"<====>"&orderNo
	'reporter.ReportEvent micPass,"更多品牌","成功", "C:\QTPPic\更多品牌.png"
	else
	reporter.ReportEvent micFail,"failed",tblVal2&"<====>"&orderNo
	print "fail"
End If
SystemUtil.CloseProcessByName "IExplore.exe"