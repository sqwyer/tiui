"@utils/StrArray"
0->P
0->S
0->E
For (X,1,length(Str0),1)
    inString(Str0,",",X)→X
    P+1→P
    If P=I
    Then
        X→S
    End
    If P=I+1
    Then
        X→E
    End
End
sub(Str0,S+1,E-S-1)→Str1
Goto 2
"@test/StrArray"
3→I
4→L
"A,B,C,D,"→Str0
prgmSTRARRAY
Disp Str1
Lbl 2