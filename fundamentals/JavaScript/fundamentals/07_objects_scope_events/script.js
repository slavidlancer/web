var car = {
    type: "Fiat",
    model: "500",
    color: "white color",
    age: 0,
    getAllInfo: function() { //getAllInfo: function getAllInfo() {<br />
        return "[" + this.id + "]: " + this.type + " " + this.model + " " + this.color + " " + this.age; //<br />
    },
    id: 1
};
var exampleBoolean = new Boolean();
var testVar = true;

document.getElementById("test").innerHTML = car.type + ": " + car.age + "/" + car.color.length;
document.getElementById("test2").innerHTML = car.getAllInfo();
document.getElementById("test3").innerHTML = car.getAllInfo;
document.getElementById("test4").innerHTML = exampleBoolean.valueOf();

if (testFunction()) {
    document.getElementById("test5").innerHTML = window.testVar;
}

function testFunction() {
    return testVar;
}

function showDate() {
    document.getElementById("test6").innerHTML = Date();
}

/* function showDateOnThisElement() {
    this.innerHTML = Date();
} */
