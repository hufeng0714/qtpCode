Option Explicit

Browser("系统主界面").Page("系统主界面").Sync
Browser("系统主界面").Page("系统主界面").WebElement("订单管理-菜单").Click
wait 1
'Browser("系统主界面").Page("系统主界面").Link("待报报价单-订单管理-测试环境").Click
'Browser("系统主界面").Page("系统主界面").Link("待报报价单-订单管理-预发环境").Click
Browser("系统主界面").Page("系统主界面").Link("待报报价单-订单管理-prod环境").Click

'这块控件要调整成生常环境的=================================


'这块控件要调整成生常环境的=================================

wait 5

'待报价列表 objQuote
'先判断有没有待报价的数据 quoteRowcount
'再判断这条比价信息有没有别人在报价 quoteContent = objQuote.GetCellData(1,6)
'然后找到4S店那一栏 quoteContent = objQuote.GetCellData(1,5)
'最后获取4S店人员信息 fsEmployee = objFSemployee.GetCellData(1,2)
Dim objQuote
Set objQuote = Browser("系统主界面").Page("系统主界面").Frame("待报价信息框架").WebTable("待报价列表")

Dim quoteRowcount
quoteRowcount = objQuote.RowCount
print "quoteRowcount==>"&quoteRowcount

If quoteRowcount=0 Then
	SystemUtil.CloseProcessByName "IExplore.exe"
	ExitAction(1)
End If

Dim quoteContent 
quoteContent = objQuote.GetCellData(1,5)
print "quoteContent(1,5)==>"&quoteContent
quoteContent = objQuote.GetCellData(1,6)
print "quoteContent(1,6)==>"&quoteContent

Dim Iterator
Dim objFSemployee
Dim fsEmployee

For Iterator = 1 To quoteRowcount Step 1
	quoteContent = objQuote.GetCellData(Iterator,6)
	print "quoteContent(Iterator,6)==>"&quoteContent
	If quoteContent="" Then
		print "Iterator==>"&Iterator
		objQuote.ChildItem(Iterator,5,"Link",0).Click
		print "Hello world!"
		wait 8
		Set objFSemployee = Browser("系统主界面").Page("系统主界面").Frame("待报价信息框架").WebTable("4S店人员信息")
		
		fsEmployee = objFSemployee.GetCellData(1,2)
		print "fsEmployee==>"&fsEmployee
		wait 1
		SystemUtil.CloseProcessByName "IExplore.exe"
		wait 1
		Exit For
	End If
	print "abcdef"&Iterator
	If Iterator=quoteRowcount Then
		SystemUtil.CloseProcessByName "IExplore.exe"
		ExitAction(1)
	End If
Next

If fsEmployee="" Then
	print "该4S店没有销售员或者超时未获到"
	ExitAction(1)
	else
	RunAction "03Merchant", oneIteration, fsEmployee
End If