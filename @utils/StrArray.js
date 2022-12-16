const Str0 = "A,B,C,D,";
const I = 3;

let pos = 0;
let start = 0;
let end = 0;

for(let X = 1; X < Str0.length; X++) {
    X = Str0.indexOf(",", X)
    pos++;
    if(pos == I) {
        start = X;
    }
    if(pos == I+1) {
        end = X;
    }
}

console.log(
    Str0.substring(start+1, end)
)