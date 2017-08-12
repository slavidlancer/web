var objExample2 = {
    type: "type 01",
    name: "name 01",
    printNameAndType: function() {
        return this.type + "/" + this.name;
    }
};

var objExample3 = new Object();
objExample3.type = "type 02";
objExample3.name = "name 02";
objExample3.number = 3;
objExample3.printNameTypeNumber = function() {
    return this.type + "/" + this.name + "/" + this.number;
}

function objExample(type, name, number, info) {
    this.type = type;
    this.name = name;
    this.number = number;
    this.info = info;
    this.printInfo = function() {
        return this.type + "/" + this.name + "/" + this.number + "/" + this.info;
    }
}

var x1 = new Object(); // {}
var x2 = new String(); // new String("text"); // ""
var x3 = new Number(); // new Number(1); // #
var x4 = new Boolean(); //new Boolean(true); // true/false
var x5 = new Array(); // []
var x6 = new RegExp(); // /()/
var x7 = new Function(); // function() {}
var x8 = new Date();

var y1 = {};
var y2 = "";
var y3 = 0;
var y4 = false;
var y5 = [];
var y6 = /()/;
var y7 = function() {};

var firstObjExample = new objExample("", "name 01", 666, "no");
var secondObjExample = new objExample("type 01", "name 02", 999, "yes");
var testObjExample = firstObjExample;
testObjExample.name = "new name;"


document.getElementById("test").innerHTML = objExample2.printNameAndType();
document.getElementById("test2").innerHTML = objExample3.printNameTypeNumber();
document.getElementById("test3").innerHTML = firstObjExample.printInfo();
document.getElementById("test4").innerHTML = secondObjExample.printInfo();
document.getElementById("test5").innerHTML = testObjExample.printInfo();
