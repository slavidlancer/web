"use strict";
var x = 2;
var obj = {};
Object.defineProperty(obj, "x", {value: 0, writable: false});
// obj.x = 3.14;
var obj2 = {
    get x() {
        return 0;
    }
}
// obj2.x = 3.14;
// var eval = 3.14;
// var arguments = 3.14;
// var public = 1500;
var elements = ["element 01", "element 02", "element 03", "element 4"];

/* eval("var z = -1")
alert(z); */

//with (Math) {x = cos(2)};

// delete x;
// delete Object.prototype;

document.getElementById("test").innerHTML = elements;
document.getElementById("test2").innerHTML = x;

// delete testFunc;

function testFunc() {
    // "use strict";
    var y = 0;
    document.getElementById("test3").innerHTML = y;
}
