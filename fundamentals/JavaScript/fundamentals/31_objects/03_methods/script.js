var testObj = {
    property01: "value01",
    property02: 2,
    property03: "value03",
    method01: function() {
        return Math.PI * Math.PI;
    }
};

function objExample(type, name, number, info) {
    this.type = type;
    this.name = name;
    this.number = number;
    this.info = info;
    this.changeNumber = function(num) {
        this.number = num;
    },
    this.printInfo = function() {
        return this.type + "/" + this.name + "/" + this.number + "/" + this.info;
    }
}

var firstObjExample = new objExample("type 01", "name 02", 999, "yes");

document.getElementById("test").innerHTML = testObj.method01();
document.getElementById("test2").innerHTML = testObj.method01;
document.getElementById("test3").innerHTML = firstObjExample.printInfo();

firstObjExample.changeNumber(666);

document.getElementById("test4").innerHTML = firstObjExample.printInfo();
