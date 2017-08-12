var elements = ["element 01", "element 02", "element 03", "element 4"];
// var array = new Array("element 0", "element 1", "element 2", "element 3");
var element = elements[0];
elements[1] = "element 02a";
elements[4] = Date.now();
elements[5] = func();
var person = ["first_name", "last_name", 6];
var person2 = { firstName: "first_name", lastName: "last_name", age: 6 };
var fruits = ["fruit01", "fruit02", "fruit03", "fruit04"];
var text, fruitsLength, i;
fruitsLength = fruits.length;
text = "<ul>";

for (i = 0; i < fruitsLength; i++) {
    text += "<li>" + fruits[i] + "</li>";
}

text += "</ul>";

var examples = [];
examples[0] = "text";
examples[1] = 666;

var examples2 = [];
examples2["text"] = "text";
examples2["number"] = 666;

document.getElementById("test").innerHTML = elements;
// document.getElementById("test2").innerHTML = array;
document.getElementById("test2").innerHTML = element;
document.getElementById("test3").innerHTML = person[0] + person[2];
document.getElementById("test4").innerHTML = person2.lastName;
document.getElementById("test5").innerHTML = elements[4] + elements[5];

elements[6] = person;

document.getElementById("test6").innerHTML = elements[6];
document.getElementById("test7").innerHTML = elements.length;
document.getElementById("test8").innerHTML = elements.sort();
document.getElementById("test9").innerHTML = text;
document.getElementById("test10").innerHTML = fruits;
document.getElementById("test12").innerHTML = examples[0] + " " + examples.length;
document.getElementById("test13").innerHTML = examples2[0] + " " + examples2.length;
document.getElementById("test14").innerHTML = typeof fruits;
document.getElementById("test15").innerHTML = typeof examples2;
document.getElementById("test16").innerHTML = Array.isArray(fruits);
document.getElementById("test17").innerHTML = Array.isArray(examples2);
document.getElementById("test18").innerHTML = isArray(fruits);
document.getElementById("test19").innerHTML = isArray(examples2);
document.getElementById("test20").innerHTML = fruits instanceof Array;
document.getElementById("test21").innerHTML = examples2 instanceof Array;


function func() {
    return "result";
}

function pushFunc() {
    fruits.push("fruit05");
    fruits[fruits.length] = "fruit06";
    fruits[8] = "fruits07";
    document.getElementById("test10").innerHTML = fruits;
    document.getElementById("test11").innerHTML = fruits[6] + ", " + fruits[7];
}

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}
