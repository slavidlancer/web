var elements = ["element 01", "element 02", "element 03", "element 04"];
var text = "";
var text2 = "";
var i = 0;
var j = 0;

while (j <= 666) {
    text += j;
    j += 333;
}

do {
    text += j;
    j++;
} while (j < 666);

while (elements[i]) {
    text2 += " " + elements[i];
    i++;
}

document.getElementById("test").innerHTML = text;
document.getElementById("test2").innerHTML = j;
document.getElementById("test3").innerHTML = text2;
