Option Explicit

wait 1
Browser("好买车").Page("车型详情页").Sync

wait 1
Browser("好买车").Page("车型详情页").WebButton("选定比价").Click
wait 1