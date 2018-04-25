//Find sum: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n 

var n=8;
var sum=0;

for (var i=1; i<(n+1); i++){
    sum = sum+1/i;
}
console.log("sum =", sum);