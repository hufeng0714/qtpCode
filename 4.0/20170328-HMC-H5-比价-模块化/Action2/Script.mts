Option Explicit

'Dim Iterator
'For Iterator = 1 To 6 Step 1

SystemUtil.Run "chrome.exe","http://m-istage.haomaiche.com/sh"
'SystemUtil.Run "chrome.exe","http://m-test.haomaiche.com/"
'SystemUtil.Run "chrome.exe","http://m-stage.haomaiche.com/"

Browser("好买车").Page("好买车-首页").Sync
wait 1
Browser("好买车").Page("好买车-首页").WebButton("选车去比价-按钮").Click