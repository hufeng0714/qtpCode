Option Explicit
'
'Dim fs,s
'Set fs = CreateObject("Scripting.FileSystemObject")
'
'If fs.FolderExists("c:\temp1") Then
'	s = "folder is exists!"
'	fs.DeleteFolder("c:\temp1")
'	fs.CreateFolder("c:\temp1")
'	msgbox(s)
'	else
'	s = "folder is not exist!"
'	fs.CreateFolder("c:\temp1")
'	msgbox(s)
'End If


'
''DataTable取值相关
'dim actual
'actual=DataTable("Home_Element",dtLocalSheet)
''DataTable("参数名称",dtLocalSheet)取当前action表单中的数据
''actual=DataTable("列名",dtGlobalSheet)
''取datatable中Global的值
'print actual
'Dim rowCount
'rowCount = DataTable.GetSheet("Action1").GetRowCount
''得到datatable总行数的命令：GetRowCount
'print rowCount
'
'Dim i
'
'For i = 1 To rowCount Step 1
'	
'	Dim roData
'	roData = DataTable.GetSheet("Action1").GetParameter("Home_Element").ValueByRow(i)
'	'DataTable.GetSheet("Action1").GetParameter("test").ValueByRow(4)
'	print roData
'Next

'Dim test
'test = 0
'   	If test=0 Then
'     	    print "Pass"
'     		reporter.reportEvent micPass,"测试通过","OK"
'     		else
'     		print "Failed"
'     		reporter.reportEvent micFail,"测试失败","Failed"
'     	End If

'
''定义两个变量
''调用action2
'Dim strMessA
'strMessA = "我是=="
'Dim strMessB
'strMessB = "一个传递的参数"
'Dim strMessC
'strMessC = parameter("strMessC")
''调用Action2，并传参
'RunAction "Action2", oneIteration,strMessA,strMessB,strMessC
'print "strMessC = "&strMessC
'msgbox(strMessC)


Dim wshShell
SystemUtil.Run "chrome"
Set wshShell=CreateObject("Wscript.Shell")
wshShell.SendKeys "%d"''定位到浏览器地址栏
wait 2
wshShell.SendKeys "admin.easybuycar.com"
wait 2
wshShell.SendKeys "{ENTER}"
wait 2
''ALT+空格+X  浏览器最大化的快捷键
''ALT+空格+R	浏览器还原的快捷键
''ALT+空格+N	浏览器最小的快捷键
''三个组合键没捣鼓出来，我就折中处理了下
wshShell.SendKeys"%( )"''发送 ALT+空格
wait 2
wshShell.SendKeys "x"''发送 x
wait 2
wshShell.SendKeys "%( )"''发送 ALT+空格
wait 2
wshShell.SendKeys "r"''发送 r
wait 2