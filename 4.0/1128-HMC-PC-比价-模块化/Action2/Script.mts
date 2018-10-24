Option explicit

SystemUtil.Run "chrome.exe","http://test.haomaiche.com/sh"

Browser("好买车").Page("好买车-首页").Sync
Browser("好买车").Page("好买车-首页").Link("选择车型-按钮").Click
wait 1