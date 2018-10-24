Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Sync
wait 1
Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebEdit("优惠比例输入框").Set "6.7"
wait 1
Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebEdit("综合服务费输入框").Set "5620"
wait 1
Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebEdit("代办沪牌输入框").Set "1520"
wait 1
Dim objLoad
Set objLoad = Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebEdit("贷款补贴输入框")

If objLoad.Exist(0) Then
	Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebEdit("贷款补贴输入框").Set "3000"
	wait 1
	Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebEdit("贷款手续费输入框").Set "300"
	wait 1	
End If
Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebEdit("颜色加价输入框").Set "890"
wait 1
Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebEdit("现金加价输入框").Set "990"
wait 1
Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebRadioGroup("提车加装选择框").Select("#1")
wait 1
Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebEdit("提车加装输入框").Set "790"
wait 1
Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebButton("添加备注按钮").Click
wait 1
Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebEdit("备注输入框").Set "auto test"
wait 1
Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebButton("提交询价单按钮").Click
wait 1
Browser("4S店后台管理系统登录界面").Page("4S店后台管理系统登录界面").Frame("区报价框架").WebElement("确认提交").Click
wait 10
Browser("4S店后台管理系统登录界面").Dialog("来自网页的消息").WinButton("确定").Click
'SystemUtil.CloseProcessByName "IExplore.exe"