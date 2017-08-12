var objExample2 = {
    first: "first 02",
    last: "last 02",
    number: 9,
    printTheInfo: function() {
        return this.first + " " + this.last + " / " + this.number;
    }
};

var anotherObjExample2 = {
    first: "first 03",
    last: "last 03"
};

var objExampleInstance = new ObjExample("fir st", "la st", 0, "col or");
var objExampleInstance2 = new AnotherObjExample("fir st 2", "la st 2");


document.getElementById("test").innerHTML = objExampleInstance.printInfo.call(objExampleInstance2);;
document.getElementById("test2").innerHTML = objExample2.printTheInfo() + " | " +
        objExample2.printTheInfo.apply(anotherObjExample2);
document.getElementById("test3").innerHTML = Math.max(1, 2, 3) + " | " + Math.max.apply(null, [1, 2, 3]);


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

function AnotherObjExample(first, last) {
    this.first = first;
    this.last = last;
}
