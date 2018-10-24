Option Explicit



Dim Iterator
For Iterator = 1 To 1  Step 1

print Iterator
wait 1
SystemUtil.Run "C:\Users\Victor\Desktop\deletefolder.vbs"
wait 1

'RunAction "00-MainAction", oneIteration
RunAction "01-HomeAction", oneIteration

'选择品牌
'RunAction "02-CarBrand-MAZDA", oneIteration
'RunAction "02-CarBrand-Landrover", oneIteration
RunAction "02-CarBrand-Chevrolet", oneIteration
'
'If Iterator<5 Then
'	RunAction "02-CarBrand-MAZDA", oneIteration
'	ElseIf Iterator>4 and Iterator<9 Then
'	RunAction "02-CarBrand-Landrover", oneIteration
'	else
'	RunAction "02-CarBrand-Chevrolet", oneIteration	
'End If

'第一个弹出框 去比价 下一步
RunAction "03-Trad-Step1", oneIteration

'第二个弹出框 选择款型
'RunAction "04-CarModel-MAZDA", oneIteration
'RunAction "04-CarModel-Chevrolet", oneIteration
'RunAction "04-CarModel-Landrover", oneIteration
'
'If Iterator<5 Then
'	RunAction "04-CarModel-MAZDA", oneIteration
'	ElseIf Iterator>4 and Iterator<9 Then
'	RunAction "04-CarModel-Landrover", oneIteration
'	else
'	RunAction "04-CarModel-Chevrolet", oneIteration
'End If

'第三个弹出框 选颜色
'RunAction "05-CarColor-MAZDA", oneIteration
'RunAction "05-CarColor-Landrover", oneIteration
RunAction "05-CarColor-Chevrolet", oneIteration
'
'If Iterator<5 Then
'	RunAction "05-CarColor-MAZDA", oneIteration
'	ElseIf Iterator>4 and Iterator<9 Then
'	RunAction "05-CarColor-Landrover", oneIteration
'	else
'	RunAction "05-CarColor-Chevrolet", oneIteration
'End If

'第四个弹出框 选牌照
'RunAction "06-License-huA", oneIteration
'RunAction "06-License-huC", oneIteration
'RunAction "06-License-waiPaiSH", oneIteration
'RunAction "06-License-waiPaiAH", oneIteration

Dim modData 
modData = Iterator mod 4
print modData
If modData=1 Then
	RunAction "06-License-huA", oneIteration
	ElseIf modData=2 Then
	RunAction "06-License-huC", oneIteration
	ElseIf modData=3 Then
	RunAction "06-License-waiPaiSH", oneIteration
	Else
	RunAction "06-License-waiPaiAH", oneIteration
End If

'第五个弹出框 付款方式
'RunAction "07-PayModel-AllPay", oneIteration
'RunAction "07-PayModel-Loan", oneIteration
'RunAction "07-PayModel-Pay&Swap", oneIteration
'RunAction "07-PayModel-Loan&Swap", oneIteration

If modData=1 Then
	RunAction "07-PayModel-AllPay", oneIteration
	ElseIf modData=2 Then
	RunAction "07-PayModel-Loan", oneIteration
	ElseIf modData=3 Then
	RunAction "07-PayModel-Pay&Swap", oneIteration
	Else
	RunAction "07-PayModel-Loan&Swap", oneIteration
End If

'第六个弹出框 购车时间
'RunAction "08-PurchaseTime-m3Month", oneIteration
'RunAction "08-PurchaseTime-i3Month", oneIteration
'RunAction "08-PurchaseTime-i1Month", oneIteration
'RunAction "08-PurchaseTime-i2Week", oneIteration

If modData=1 Then
	RunAction "08-PurchaseTime-m3Month", oneIteration
	ElseIf modData=2 Then
	RunAction "08-PurchaseTime-i3Month", oneIteration
	ElseIf modData=3 Then
	RunAction "08-PurchaseTime-i1Month", oneIteration
	Else
	RunAction "08-PurchaseTime-i2Week", oneIteration
End If

'第七个弹出框 区域选择
RunAction "09-Area", oneIteration

'4S店默认 然后下一步
RunAction "10-Trad-Step9", oneIteration

'注册登录界面
RunAction "11-RegisterLogin", oneIteration

'admin登录
'RunAction "12-AdminLogin", oneIteration

'获取验证码
'RunAction "13-VerifyCode", oneIteration

'完成订单号比价
'RunAction "14-OderList", oneIteration

next