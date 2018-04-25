//Check a prime number

var a=7;
if ((a%2==0)&&(a!=2))
    console.log(a + " is not prime");
else if (a==2)
    console.log(a + " is not prime");
else{
    var k=Math.round(Math.sqrt(a));
    var flag = false;

    for(var i=2; i<k+1; i++)
        if(a%i==0)
        {
            console.log(a + " is not prime");
            flag = true;
            break;
        }

    if (flag == false)
        console.log(a + " is prime");
}