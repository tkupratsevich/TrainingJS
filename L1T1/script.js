//Roots of quadratic equation with the given coefficients a, b, c.

var a=1, b=4, c=-3;
var d=b^2-4*a*c;

if (d>0){
    console.log("Two roots");
    var x1=(-b+Math.sqrt(d))/(2*a);
    var x2=(-b-Math.sqrt(d))/(2*a);
    console.log("x1 =", x1);
    console.log("x2 =", x2);
}
else if (d==0)
{
    console.log("One root");
    var x1=(-b)/(2*a);
    console.log("x =", x1);
}
else if (d<0)
    console.log("No roots");