"@utils/StrArray"
Goto 1
** uses Z as loop variable **
Lbl 1
"PRGM-START"
0→P
0→S
0→E
For(Z,1,length(Str0),1)
inString(Str0,",",Z)→Z
P+1→P
If P=I
Then
    Z→S
End
If P=I+1
Then
    Z→E
End
End
sub(Str0,S+1,E-S-1)→Str1
DelVar S
DelVar E
DelVar P
"PRGM-END"