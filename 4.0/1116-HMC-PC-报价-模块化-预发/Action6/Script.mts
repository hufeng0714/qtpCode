Option Explicit

Dim fsEmployee
fsEmployee = parameter("fsEmployee")

'SystemUtil.Run "IExplore.exe","http://mps-test.haomaiche.com/fs/login.html"
'SystemUtil.Run "IExplore.exe","http://mps-stage.haomaiche.com/fs/login.html"
'SystemUtil.Run "IExplore.exe","http://mps-prod.haomaiche.com"
SystemUtil.Run "IExplore.exe","http://mps.haomaiche.com"

Browser("4S店后台管理系统登录界面").Sync
'Browser("4S店后台管理系统登录界面").Page("登录界面").WebEdit("用户名输入框").Set "XSHXJJBLH002"
Browser("4S店后台管理系统登录界面").Page("登录界面").WebEdit("用户名输入框").Set fsEmployee
Browser("4S店后台管理系统登录界面").Page("登录界面").WebEdit("密码输入框").Set "123456"
wait 1
Browser("4S店后台管理系统登录界面").Page("登录界面").Image("登录按钮").Click

Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Sync
wait 1
'Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Link("请报价-菜单").Click
Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Link("请报价-菜单-prod").Click

'这块控件要调整成生常环境的=================================


'这块控件要调整成生常环境的=================================

wait 3

Dim objTbl
set objTbl =  Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("待报价列表框架").WebTable("待报价单列表")

Dim tblVal
tblVal = objTbl.GetCellData(1,7)
print tblVal

objTbl.ChildItem(1,7,"Link",0).Click
print "Hello world!"
wait 1

Dim randomSelect

randomSelect = RandomNumber(0,3)
print "randomSelect==>"&randomSelect

Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebRadioGroup("车源单选按钮").Select("#"&randomSelect)

Dim quoteRowcount
quoteRowcount = parameter("quoteRowcount")

'如果是停售的车型直接提交
If randomSelect=0 Then
	
	Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebButton("提交询价单").Click
	wait 1
	Browser("4S店后台管理系统登录界面").Dialog("windows弹出框").WinButton("确定").Click
	wait 1
	SystemUtil.CloseProcessByName "IExplore.exe"
	
	If quoteRowCount<>"0" Then
	RunAction "00MainAction", oneIteration
	End If
	
	ExitAction(1)
End If

Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("优惠比例").Set "6.7"

'计算购置税和保险费的正确性
Dim test

test = Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebTable("保险税费表").GetCellData(1,1)

print test

Dim test1

'test1 = Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebTable("免费询价-右侧简图").GetCellData(1,1)
'print test1
'test1 = Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebTable("免费询价-右侧简图").GetCellData(2,1)
'print test1
'test1 = Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebTable("免费询价-右侧简图").GetCellData(3,1)
'print test1
test1 = Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebTable("免费询价-右侧简图").GetCellData(4,1)
print test1

'综合服务费
wait 1
Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("综合服务费").Set "3000"
wait 1

'牌照费用 

'判断是否上外牌

Dim objLicense

set objLicense = Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebRadioGroup("是否可自主回原籍单选框")

Dim licenseSelect
licenseSelect = RandomNumber(0,1)
print "licenseSelect==>"&licenseSelect

Dim existResult

existResult = objLicense.GetROProperty("visible")

print "existResult==>"&existResult

Dim objWebButton
'Set objWebButton = Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebButton("推荐可上外牌")

Dim existWebButton

'If objWebButton.Exist(0) Then
'	existWebButton = objWebButton.GetROProperty("visible")
'	print  "existWebButton==>"&existWebButton
'End If


'虽然界面看不到，但对象还是存在的，只是不显示出来而已，所以用exist来判断不行
'If objLicense.Exist(0) Then
If existResult Then
	
	Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebRadioGroup("是否可自主回原籍单选框").Select("#"&licenseSelect)
	
	Set objWebButton = Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebButton("推荐可上外牌")
	
	If objWebButton.Exist(0) Then
	existWebButton = objWebButton.GetROProperty("visible")
	print  "existWebButton==>"&existWebButton
	End If
	
	wait 1
	If licenseSelect=1 Then
		Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("牌照费用").Set "1500"
		wait 1
		ElseIf existWebButton Then
		Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebButton("推荐可上外牌").Click
		wait 1
		Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("牌照费用").Set "1500"
		wait 1
		Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebList("推荐外牌-省").Select "安徽"
		wait 1
		Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebList("推荐外牌-城市").Select "安庆"
		else
		wait 1
		Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("牌照费用").Set "1500"
		wait 1
		Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebList("推荐外牌-省").Select "安徽"
		wait 1
		Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebList("推荐外牌-城市").Select "安庆"
	End If
	else
	Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("牌照费用").Set "1500"
	wait 1
End If


'判断是否贷款

Dim objLoad
Set objLoad = Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("贷款补贴")

Dim loadVisible

loadVisible = objLoad.GetROProperty("visible")
print "loadVisible==>"&loadVisible

'If objLoad.Exist(0) Then
If loadVisible Then
	Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("贷款补贴").Set "3000"
	wait 1
	Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("贷款手续费").Set "300"
	wait 1
End If

'判断是否置换

Dim objSwap
Set objSwap = Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("置换补贴")

'Dim swapVisible
'
'swapVisible = objSwap.GetROProperty("visible")
'print "swapVisible==>"&swapVisible

If objSwap.Exist(3) Then
'If swapVisible Then
	Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("置换补贴").Set "8000"
End If

wait 1
Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("颜色加价").Set "700"
wait 1
Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("现金加价").Set "900"
wait 1


Dim additionSelect
additionSelect = RandomNumber(0,1)
print "additionSelect==>"&additionSelect

If additionSelect=1 Then
	Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebRadioGroup("是否提车加装单选项").Select "#1"
	wait 1
	Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebEdit("提车加装价格").Set "1200"
	wait 1
End If

Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebButton("提交询价单").Click
wait 1
Dim objPopup
Set objPopup = Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebTable("弹出框内容表")

Dim popupRowcount
popupRowcount = objPopup.RowCount
print popupRowcount

Dim popupContent
popupContent = objPopup.GetCellData(1,1)
print "popupContent==>"&popupContent

popupContent = objPopup.GetCellData(2,1)
print "popupContent==>"&popupContent

popupContent = objPopup.GetCellData(3,1)
print "popupContent==>"&popupContent

popupContent = objPopup.GetCellData(4,1)
print "popupContent==>"&popupContent

popupContent = objPopup.GetCellData(5,1)
print "popupContent==>"&popupContent

popupContent = objPopup.GetCellData(17,1)
print "popupContent==>"&popupContent

wait 1
Browser("4S店后台管理系统登录界面").Page("商户端操作界面").Frame("去报价详情框架").WebElement("确认提交-最后的弹出框").Click
wait 1
Browser("4S店后台管理系统登录界面").Dialog("windows弹出框").WinButton("确定").Click

SystemUtil.CloseProcessByName "IExplore.exe"

If quoteRowCount<>"0" Then
	RunAction "00MainAction", oneIteration
End If