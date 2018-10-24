Option Explicit
Browser("系统主界面").Page("系统主界面").Sync
wait 1
Browser("系统主界面").Page("系统主界面").WebElement("订单管理-菜单").Click
wait 1
Browser("系统主界面").Page("系统主界面").Link("待报报价单-订单管理").Click
wait 1
Dim objTbl
set objTbl = Browser("系统主界面").Page("系统主界面").Frame("订单列表框架").WebTable("订单列表详情")

wait 10
Dim rowCount
rowCount = objTbl.RowCount
print "110"
print rowCount
print "110"
If rowCount=0 Then
	print "没有待报价的数据，自动化流程结束"
	SystemUtil.CloseProcessByName "IExplore.exe"
	exitAction("MainAction")	
End If

Dim tblVal
tblVal = objTbl.GetCellData(1,5)

print "121"
print tblVal

Browser("系统主界面").Page("系统主界面").Frame("订单列表框架").WebTable("订单列表详情").ChildItem(1,5,"Link",0).click
print "Hello world!"
wait 10

Dim objTbl2
Set objTbl2 = Browser("系统主界面").Page("系统主界面").Frame("订单列表框架").WebTable("4S店列弹出页")

Dim tblVal2

Dim rowCount2
rowCount2 = objTbl2.RowCount
print "110"
print rowCount2
print "110"
If rowCount2=0 Then
	print "该4S店没有人员，无法报价，自动化流程结束"
	SystemUtil.CloseProcessByName "IExplore.exe"
	exitAction("MainAction")
End If

tblVal2 = objTbl2.GetCellData(1,2)
print tblVal2
SystemUtil.CloseProcessByName "IExplore.exe"

RunAction "ThirdAction", oneIteration,tblVal2