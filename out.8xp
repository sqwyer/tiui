ClrHome
"A,B,C,D,"→Str0
0→Y
3→V
If V>9ThenFor(X,0,9)X→I0→P0→S0→EFor(Z,1,length(Str0),1)inString(Str0,",",Z)→ZP+1→PIf P=IThenZ→SEndIf P=I+1ThenZ→EEndEndsub(Str0,S+1,E-S-1)→Str1DelVar SDelVar EDelVar POutput(X-Y+1,3,Str1)EndElseThenFor(X,0,V)X→I0→P0→S0→EFor(Z,1,length(Str0),1)inString(Str0,",",Z)→ZP+1→PIf P=IThenZ→SEndIf P=I+1ThenZ→EEndEndsub(Str0,S+1,E-S-1)→Str1DelVar SDelVar EDelVar POutput(X-Y+1,3,Str1)EndEnd0→HWhile H≠0getKey→HEndPause 0→HWhile H≠0getKey→HEnd