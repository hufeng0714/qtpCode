Option Explicit

wait 1
Browser("好买车").Page("车型详情页").Sync
wait 1
Browser("好买车").Page("车型详情页").WebButton("去比价按钮").Click
wait 1
Browser("好买车").Page("车型详情页").WebElement("第一步和最后一步的下一步").Click