"@ui/ScrollableList"
Goto 1
** uses X as loop variable **
V = array length
Y = selected child (#)
Lbl 1
"PRGM-START"
For(X,0,9)
X→I
prgm @utils/StrArray
Output(X-Y+1,3,Str1)
End
"PRGM-END"