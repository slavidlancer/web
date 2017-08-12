var x = 0;
var x1 = 0.1;
var x2 = 0.2;
var x3 = x1 + x2;
var x4 = ((x1 * 10) + (x2 * 10)) / 10;
var stringBroken = "va\
        lue";
var obj; // = 2;

if (x = 0) {
    document.getElementById("test").innerHTML = (x = 1);
} else {
    document.getElementById("test").innerHTML = (x = 2);
}

if ((typeof obj !== "undefined") && (obj !== null)) {
    var obj = 5;
}

for (var i = 0; i < 10; i++) {
    // empty line
}

document.getElementById("test2").innerHTML = x3;
document.getElementById("test3").innerHTML = x4;
document.getElementById("test4").innerHTML = stringBroken;
document.getElementById("test5").innerHTML = obj;
document.getElementById("test6").innerHTML = i;
