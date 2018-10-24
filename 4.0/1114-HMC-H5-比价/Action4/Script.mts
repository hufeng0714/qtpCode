Option Explicit
SystemUtil.Run "IExplore.exe","http://oms-test.haomaiche.com/admin/login.html"
wait 1
Browser("管理后台系统界面").Page("管理后台系统界面").Sync
wait 3
Browser("管理后台系统界面").Page("管理后台系统界面").WebEdit("用户名输入框").Set "admin"
Browser("管理后台系统界面").Page("管理后台系统界面").WebEdit("密码按钮").Set "Hmc1234"
Browser("管理后台系统界面").Page("管理后台系统界面").Image("登录按钮").Click

Browser("管理后台系统界面").Page("系统主界面").Sync
Browser("管理后台系统界面").Page("系统主界面").WebElement("短信管理-菜单").Click
Browser("管理后台系统界面").Page("系统主界面").Link("发件箱-短信管理").Click

Dim phoneRan
phoneRan = parameter("phoneRan")
print "phoneRan = "&phoneRan
Browser("管理后台系统界面").Page("系统主界面").Frame("查询条件框架").WebEdit("手机-查询条件").Set phoneRan
Browser("管理后台系统界面").Page("系统主界面").Frame("查询条件框架").WebElement("查询按钮").Click

wait 3

Dim objTbl
set objTbl = Browser("管理后台系统界面").Page("系统主界面").Frame("查询条件框架").WebTable("短信结果表")

Dim tblVal
tblVal = objTbl.GetCellData(1,2)
print tblVal

Dim verifyCode
Dim isOlduser
isOlduser = parameter("isOlduser")

If isOlduser=0 Then
	verifyCode = mid(tblVal,2,4)
	else
	verifyCode = mid(tblVal,5,4)	
End If

parameter("verifyCode") = verifyCode
print "verifyCode2 = "&verifyCode
SystemUtil.CloseProcessByName "IExplore.exe"