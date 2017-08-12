var x = 0;

document.getElementById("test").innerHTML = Boolean(x == 8);
document.getElementById("test2").innerHTML = Boolean(100);
document.getElementById("test3").innerHTML = Boolean(3.14);
document.getElementById("test4").innerHTML = Boolean(-15);
document.getElementById("test5").innerHTML = Boolean("text");
document.getElementById("test6").innerHTML = Boolean("false");
document.getElementById("test7").innerHTML = Boolean(7 + 1 + 3.14);
document.getElementById("test8").innerHTML = Boolean(5 < 6);
document.getElementById("test9").innerHTML = Boolean(x);

x = -0;

document.getElementById("test10").innerHTML = Boolean(x);

x = "";

document.getElementById("test11").innerHTML = Boolean(x);

var y;

document.getElementById("test12").innerHTML = Boolean(y);

x = null;

document.getElementById("test13").innerHTML = Boolean(x);

x = false;  // new Boolean(false);

document.getElementById("test14").innerHTML = Boolean(x);

var result = x / y;

document.getElementById("test15").innerHTML = Boolean(result);

var booleanValue = false;
var booleanObject = new Boolean(false);
var booleanObject2 = new Boolean(false);

document.getElementById("test16").innerHTML = typeof booleanValue + "/" + typeof booleanObject;
document.getElementById("test17").innerHTML = Boolean(booleanValue == booleanObject);
document.getElementById("test18").innerHTML = Boolean(booleanValue === booleanObject);
document.getElementById("test19").innerHTML = Boolean(booleanObject == booleanObject2);
