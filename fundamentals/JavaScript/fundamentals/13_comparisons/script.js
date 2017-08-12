var x = 5;
var y = 3;

document.getElementById("test").innerHTML = x == 8;
document.getElementById("test2").innerHTML = x == 5;
document.getElementById("test3").innerHTML = x == "5";
document.getElementById("test4").innerHTML = x === 5;
document.getElementById("test5").innerHTML = x === "5";
document.getElementById("test6").innerHTML = x != 8;
document.getElementById("test7").innerHTML = x !== 5;
document.getElementById("test8").innerHTML = x !== "5";
document.getElementById("test9").innerHTML = x !== 8;
document.getElementById("test10").innerHTML = x > 8;
document.getElementById("test11").innerHTML = x < 8;
document.getElementById("test12").innerHTML = x >= 8;
document.getElementById("test13").innerHTML = x <= 8;

x = 6;

document.getElementById("test14").innerHTML = (x < 10) && (y > 1);
document.getElementById("test15").innerHTML = (x == 5) || (y == 5);
document.getElementById("test16").innerHTML = !(x == y);

var check = 9;  // "x";
check = Number(check);

if (isNaN(check)) {
    document.getElementById("test17").innerHTML = "not a number";
} else {
    document.getElementById("test17").innerHTML = (check > 20) ? "> 20" : "< 20";
}

document.getElementById("test18").innerHTML = 2 < 12;
document.getElementById("test19").innerHTML = 2 < "12";
document.getElementById("test20").innerHTML = 2 < "text";
document.getElementById("test21").innerHTML = 2 > "text";
document.getElementById("test22").innerHTML = 2 == "text";
document.getElementById("test23").innerHTML = "2" < "12";
document.getElementById("test24").innerHTML = "2" > "12";
document.getElementById("test25").innerHTML = "2" == "12";
