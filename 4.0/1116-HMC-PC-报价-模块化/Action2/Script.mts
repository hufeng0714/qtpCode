Option Explicit

SystemUtil.Run "IExplore.exe","http://oms-test.haomaiche.com/admin/login.html"

'SystemUtil.Run "IExplore.exe","http://oms-stage.haomaiche.com/admin/login.html"

wait 1
Browser("管理后台系统界面").Page("管理后台系统界面").Sync
wait 3
Browser("管理后台系统界面").Page("管理后台系统界面").WebEdit("用户名输入框").Set "admin"
Browser("管理后台系统界面").Page("管理后台系统界面").WebEdit("密码输入框").Set "Hmc1234"
Browser("管理后台系统界面").Page("管理后台系统界面").Image("登录按钮").Click
wait 1