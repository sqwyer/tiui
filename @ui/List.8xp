"@ui/List"
Goto 1
** uses X as loop variable **
V = array length
Y = selected child (#)
Lbl 1
"PRGM-START"
If V>9
Then
For(X,0,9)
X→I
prgm @utils/StrArray
Output(X-Y+1,3,Str1)
End
Else
Then
For(X,0,V)
X→I
prgm @utils/StrArray
Output(X-Y+1,3,Str1)
End
End
"PRGM-END"