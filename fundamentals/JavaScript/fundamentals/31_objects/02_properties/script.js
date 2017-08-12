var testObj = {
    property01: "value01",
    property02: "value02",
    property03: "value03",
    property04: "value04",
    property05: "value05"
};

var x = "property03";
var text = "";


for (prop in testObj) {
    text += " " + testObj[prop];
}

testObj.property04 = "value04_02";


document.getElementById("test").innerHTML = testObj.property01 + "/" + testObj["property02"] + "/" + testObj[x];
document.getElementById("test2").innerHTML = text + " | " + testObj.property04;

delete testObj.property05;
text = "";

for (prop in testObj) {
    text += " " + testObj[prop];
}

document.getElementById("test3").innerHTML = text + " | " + testObj.property05;
