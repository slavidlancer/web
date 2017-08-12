var objExample = {
    name: "na me",
    value: 999,
    printInfo: function() {
        return this;
    }
};

var objExample2 = new AnotherObjExample("test", 2);

document.getElementById("test").innerHTML = calculateProduct(2, 3) + "/" + window.calculateProduct(1, 9);
document.getElementById("test2").innerHTML = testThisKeyword() + " | " + objExample.printInfo();
document.getElementById("test3").innerHTML = objExample2.value + " | " + objExample2.printInfo();

function AnotherObjExample(name, value) {
    this.name = name;
    this.value = value;
    this.printInfo = function() {
        return this;
    }
}

function calculateProduct(a, b) {
    return a * b;
}

function testThisKeyword(a, b) {
    return this;
}
