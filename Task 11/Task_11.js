var C = 25;
var F = 70;

var to_far = (C * 9 / 5) + 32;
var to_cent = (F - 32) * 5 / 9;

document.getElementById("cent").innerHTML = C + "&#8451 is " + to_far + "&#8457";
document.getElementById("far").innerHTML = F + "&#8457 is " + to_cent + "&#8451";