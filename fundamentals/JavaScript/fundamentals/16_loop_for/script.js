var elements = ["element 01", "element 02", "element 03", "element 04"];
// var text = "";
var j = 0;
var objExample = { "property01": "value01", "property02": "value02", "property03": 03};
var text2 = "";

for (var i = 0, length = elements.length, text = ""; i < length; i++) { // < elements.length
    text += elements[i] + "<br />";
}

for (; j <= 666;) {
    text += j;
    j += 333;
}

for (var index in objExample) {
    text2 += " " + objExample[index];
}

document.getElementById("test").innerHTML = text;
document.getElementById("test2").innerHTML = text2;
