Option Explicit

SystemUtil.Run "IExplore.exe","http://mps-test.haomaiche.com/fs/login.html"

Dim tblVal2
tblVal2 = parameter("tblVal2")
print tblVal2
Browser("4S店后台管理系统登录界面").Page("登录前界面").Sync

Browser("4S店后台管理系统登录界面").Page("登录前界面").WebEdit("用户名输入框").Set tblVal2
Browser("4S店后台管理系统登录界面").Page("登录前界面").WebEdit("密码输入框").Set "123456"
Browser("4S店后台管理系统登录界面").Page("登录前界面").Image("登录按钮").Click

Browser("4S店后台管理系统登录界面").Page("登陆后页面").Sync

wait 5

Dim objTbl
set objTbl =  Browser("4S店后台管理系统登录界面").Page("登陆后页面").Frame("待报价框架").WebTable("待报价列表")

Dim tblVal
tblVal = objTbl.GetCellData(1,7)
print tblVal

objTbl.ChildItem(1,7,"Link",0).Click
print "Hello world!"
wait 5

RunAction "FourthAction", oneIteration
