var obj = document.getElementById("test");
var number = 1;
var message2 = document.getElementById("test4");

/* try {
    addalert("welcome");
} catch (err) {
    obj.innerHTML = err.message;
    throw "error occurred";
} */

/* try {
    number.toPrecision(500);
} catch (err) {
    message2.innerHTML = err.name + "/" + err.message;
} */

/* try {
    number += number2 + 1;
} catch (err) {
    message2.innerHTML = err.name + "/" + err.message;
} */

/* try {
    eval("alert('Hello)");
} catch (err) {
    message2.innerHTML = err.name + "/" + err.message;
} */

/* try {
    number.toUpperCase();
} catch (err) {
    message2.innerHTML = err.name + "/" + err.message;
} */

try {
    decodeURI("%%%");
} catch (err) {
    message2.innerHTML = err.name + "/" + err.message;
}


function checkInput() {
    var message, x;

    message = document.getElementById("test2");
    message.innerHTML = "";
    x = document.getElementById("input01").value;
    currentValue = document.getElementById("test3");
    currentValue.innerHTML = "";

    try {
        if (x == "") {
            throw "empty";
        }

        if (isNaN(x)) {
            throw "not a number";
        }

        x = Number(x);

        if (x < 5) {
            throw "too low";
        }

        if (x > 10) {
            throw "too high";
        }
    } catch (err) {
        message.innerHTML = "input is " + err;
    } finally {
        currentValue.innerHTML = x;
    }
}
