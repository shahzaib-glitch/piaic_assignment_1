var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.getElementById("1").innerHTML = "Value  of --a is :" + (--a);
document.getElementById("2").innerHTML = "Value of --a - --b is:" + (--a - --b);
document.getElementById("3").innerHTML = "Value of --a - --b + ++b is :" + (--a - --b + ++b);
document.getElementById("4").innerHTML = "Value of --a - --b + ++b + b-- is : " + (--a - --b + ++b + b--);

document.getElementById("result").innerHTML = "Result : " + result;