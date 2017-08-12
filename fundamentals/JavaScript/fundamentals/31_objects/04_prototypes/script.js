var objExampleInstance = new ObjExample("fir st", "la st", 0, "col or");
var objExampleInstance2 = new ObjExample("fir st 2", "la st 2", 1, "col or 2");
objExampleInstance.newProperty = "new";

objExampleInstance.newMethod = function() {
    return this.printInfo() + "/" + this.newProperty;
};

ObjExample.prototype.newPrototypeProperty = "value";
ObjExample.prototype.newPrototypePropertyParameter = this.value;
var objExampleInstance3 = new ObjExample("fir st 2", "la st 2", 1, "col or 2", "v");

ObjExample.prototype.newPrototypeMethod = function() {
    return this.newPrototypeProperty;
}


document.getElementById("test").innerHTML = objExampleInstance.printInfo() + " | " + objExampleInstance2.printInfo();
document.getElementById("test2").innerHTML = objExampleInstance.newProperty + " | " + objExampleInstance2.newProperty +
        " | " + objExampleInstance.newMethod() + " | " + objExampleInstance2.newProperty2;
document.getElementById("test3").innerHTML = objExampleInstance.newPrototypeProperty + " | " +
        objExampleInstance2.newPrototypeProperty + " | " + objExampleInstance3.newPrototypePropertyParameter;
document.getElementById("test4").innerHTML = objExampleInstance.newPrototypeMethod();

objExampleInstance2.newPrototypeProperty = "value 02";

document.getElementById("test5").innerHTML = objExampleInstance2.newPrototypeMethod();

objExampleInstance3.newPrototypeProperty = "value 03";

document.getElementById("test6").innerHTML = objExampleInstance3.newPrototypeMethod();

function ObjExample(first, last, number, color) {
    this.first = first;
    this.last = last;
    this.number = number;
    this.color = color;
    this.newProperty2 = "default";
    this.printInfo = function() {
        return this.first + " " + this.last + "/" + this.number + ", " + this.color;
    }
}
