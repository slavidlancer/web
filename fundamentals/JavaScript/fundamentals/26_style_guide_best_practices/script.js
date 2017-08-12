var elements = [];
var boolValue = false;
var emptyString = "";
var nullValue = 0;
var emptyObject = {};
var exampleObject = {
    property01: "string1",
    property02: "string2",
    property03: 3,
    property04: "string4",
};
var x = "string0";
var y = new String("string0");
var z = new String("string0");
var regExpObject = /()/; // new RegExp();
var funcValue = function() {
    return "value";
}.call();
var numberCheck01 = 5 - "7";
var numberCheck02 = "5" - 7;
var numberCheck03 = 5 - "x";
var stringCheck = "string01" - "string02";
var day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;

    case 6:
        day = "Saturday";
        break;

    default:
        day = "unknown";
        break;
}

document.getElementById("test").innerHTML = elements;
document.getElementById("test2").innerHTML = emptyString;
document.getElementById("test3").innerHTML = nullValue;
document.getElementById("test4").innerHTML = emptyObject;
document.getElementById("test5").innerHTML = exampleObject.property01;
document.getElementById("test6").innerHTML = (x === y);
document.getElementById("test7").innerHTML = (y === z);
document.getElementById("test8").innerHTML = !boolValue;
document.getElementById("test9").innerHTML = regExpObject;
document.getElementById("test10").innerHTML = funcValue;
document.getElementById("test11").innerHTML = numberCheck01.valueOf() + "/" + typeof numberCheck01;
document.getElementById("test12").innerHTML = numberCheck02.valueOf() + "/" + typeof numberCheck02;
document.getElementById("test13").innerHTML = numberCheck03.valueOf() + "/" + typeof numberCheck03;
document.getElementById("test14").innerHTML = stringCheck;
document.getElementById("test15").innerHTML = (0 == "") + "/" + (1 == "1") + "/" + (1 == true) + "/" + (0 === "") + "/" +
        (1 === "1") + "/" + (1 === true);

function pushFunc() {
    return 0;
}

function checkFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }

    return y;
} 
