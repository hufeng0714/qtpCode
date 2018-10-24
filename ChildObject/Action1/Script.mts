Option Explicit

SystemUtil.Run "chrome.exe","m.haomaiche.com"
wait 2
'Call WebLinkClick_Function_Module("好买车","好买车","300")
Call WebElementName_Function("好买车","好买车")
'Call WebElementHref_Function("好买车","好买车")
'Dim hrefValue
'hrefValue = Browser("好买车").Page("好买车").WebElement("WebElement").GetROProperty("href")
'
'print "hrefValue = "&hrefValue
SystemUtil.CloseProcessByName "chrome.exe"

Function WebLinkClick_Function_Module(Object_Browser,Object_page,LinkName)
Dim m_Link
Dim All_Link
Dim Count
Dim AllLinkName(3000)
Dim AllLinkHref(3000)
Dim i,j,k
k = 0
Dim wshShell

Set wshShell = CreateObject("Wscript.Shell")
' WebElementClick_Function_Module(Object_Browser, Object_page, WebElement_name)
WebElementClick_Function_Module
Set m_Link=Description.Create()

'm_Link("Link").Value="link"
m_Link("micclass").Value="Link"
'm_Link("html tag").Value="A"

Set All_Link=Browser("" & Object_Browser & "").Page("" & Object_page & "").ChildObjects(m_Link)

Count=All_Link.Count()

print "Count = "&Count

 For  i= 0 To Count -1
     AllLinkName(j) =All_Link(i).GetROProperty( "name" )
     
     print AllLinkName(j)
     	
'     If AllLinkName(j) <> "" Then
'     	print AllLinkName(j)
'     End If
'    
	AllLinkHref(j) = All_Link(i).GetROProperty("href")
	If AllLinkHref(j)<>"" Then
		
		print AllLinkHref(j)
	End If
		
 	
'    If  AllLinkName(j) =LinkName Then
'         All_Link(i).click
'         print i
'         Exit For
'	End If

'	 All_Link(i).click
'	 wait 3
'	 wshShell.SendKeys "{backspace}"
'	 wait 1
 j = j +1
 print "j = "&j
 Next
End Function

Function WebElementName_Function(Object_Browser,Object_page)
Dim m_Element
Dim All_Element
Dim Count
Dim AllElementName(3000)
Dim i,j,k
k = 0
Dim wshShell
Set wshShell = CreateObject("Wscript.Shell")
Set m_Element=Description.Create()

m_Element("micclass").Value="WebElement"

Set All_Element=Browser("" & Object_Browser & "").Page("" & Object_page & "").ChildObjects(m_Element)

Count=All_Element.Count()

'print "Count = "&Count

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
Dim roData
'	roData = DataTable.GetSheet("Action1").GetParameter("Home_Element").ValueByRow(i)
'	'DataTable.GetSheet("Action1").GetParameter("test").ValueByRow(4)
'	print roData
'Next

 For  i= 0 To Count -1
     AllElementName(j) =All_Element(i).GetROProperty( "name" )
     
     If AllElementName(j)<>"" Then
     	'print "ElementeName = "&AllElementName(j)
     	k=k+1
     	roData = DataTable.GetSheet("Action1").GetParameter("Home_ElementName").ValueByRow(k)
     	'print roData
     	
     	Dim test
     	test = StrComp("ElementeName = "&AllElementName(j),roData)
     	'print test
     	If test=0 Then
     		print "Pass"
     		else
     		print "Failed"
     	End If
     End If	
    
 j = j +1
 'print "j = "&j
 Next
End Function

Function WebElementHref_Function(Object_Browser,Object_page)
Dim m_Element
Dim All_Element
Dim Count
Dim AllElementHref(3000)
Dim i,j,k
k = 0
Dim wshShell
Set wshShell = CreateObject("Wscript.Shell")
Set m_Element=Description.Create()

m_Element("micclass").Value="WebElement"

Set All_Element=Browser("" & Object_Browser & "").Page("" & Object_page & "").ChildObjects(m_Element)

Count=All_Element.Count()

'print "Count = "&Count

 For  i= 0 To Count -1
    AllElementHref(j) = All_Element(i).GetROProperty("href")
	If AllElementHref(j)<>"" Then
		print AllElementHref(j)
	End If
		
 j = j +1
 'print "j = "&j
 Next
End Function