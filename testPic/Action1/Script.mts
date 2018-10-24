Option Explicit

Dim wshShell
Set wshShell = CreateObject("Wscript.Shell")

Dim fs
'Dim s
Set fs = CreateObject("Scripting.FileSystemObject")
wait 1
fs.CreateFolder("c:\AppiumPicBmp")

wait 1
SystemUtil.Run "chrome.exe","http://yuedu.baidu.com/ebook/59ebbf3ff90f76c660371a0f###"
Browser("Appium移动_Browser").Page("Appium移动_Page1").Sync
Browser("Appium移动_Browser").Page("Appium移动_Page1").Link("开始阅读").Click
wait 2

Browser("Appium移动_Browser").Page("Appium移动_Page").Sync
wait 2
Dim i
For i = 1 To 1000 Step 1
Dim picPath 
picPath = "c:\AppiumPicBmp\"&i&".bmp"
Desktop.CaptureBitmap picPath,true
wait 1
If i= 100 Then
	wait 30
	ElseIf i=200 Then
	wait 30
	ElseIf i=300 Then
	wait 30
	ElseIf i=400 Then
	wait 30
	ElseIf i=500 Then
	wait 30
	ElseIf i=600 Then
	wait 30
	ElseIf i=700 Then
	wait 30
	ElseIf i=800 Then
	wait 30
	ElseIf i=900 Then
	wait 30
End If
Browser("Appium移动_Browser").Page("Appium移动_Page").WebElement("Next").Click
wait 1
Next