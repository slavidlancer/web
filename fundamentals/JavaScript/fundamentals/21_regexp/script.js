var elements = ["element 01", "element 02", "element 03", "element 4"];
var strValue = "pattern w3school s w3schools search W3";
var strValue2 = "pattern w3school s w3schools search W3 Thesoft";
var n = strValue.search(/w3schools/i);
var n2 = strValue.search("W3");
var n3 = strValue.search("found");
var strValue3 = strValue2.replace(/thesoft/i, "W3Schools");
var strValue4 = strValue2.replace("Thesoft", "W3Schools");
var pattern = /e/;
var test = pattern.test("free problem solved");
var test2 = pattern.exec("free problem solved");
var pattern2 = /[^h]/g;
var test3 = strValue4.match(pattern2);

document.getElementById("test").innerHTML = n;
document.getElementById("test2").innerHTML = n2;
document.getElementById("test3").innerHTML = n3;
document.getElementById("test4").innerHTML = strValue2 + " | " + strValue3;
document.getElementById("test5").innerHTML = strValue2 + " | " + strValue4;
document.getElementById("test6").innerHTML = test;
document.getElementById("test7").innerHTML = test2;
document.getElementById("test8").innerHTML = test3;
