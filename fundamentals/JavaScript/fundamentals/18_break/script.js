var text = "";
var text2 = "";
var text3 = "";
var elements = ["e1", "e2", "e3", "e4"];

for (var i = 1; i <= 13; i++) {
    if (i == 10) {
        break;
    }

    text += "number: " + i + "<br />";
}

for (var j = 1; j <= 13; j++) {
    if (j == 10) {
        continue;
    }

    text2 += "number: " + j + "<br />";
}

/* list: {
    text3 += elements[0] + "<br />";
    text3 += elements[1] + "<br />";
    break list;
    text3 += elements[2] + "<br />";
    text3 += elements[3] + "<br />";
} */

document.getElementById("test").innerHTML = text;
document.getElementById("test2").innerHTML = text2;
document.getElementById("test3").innerHTML = elements; // text3
