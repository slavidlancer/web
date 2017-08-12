var writeValue = "empty";
document.getElementById("test2").innerHTML = writeValue;
document.getElementById("test3").innerHTML = checkTimeFunc();

function checkFunc(encodingValue) {
    if (encodingValue == "uft-8") {
        writeValue = "wrong";
    } else if (encodingValue == "utf-8") {
        writeValue = "UTF-8";
    } else {
        writeValue = "undefined";
    }

    document.getElementById("test").innerHTML = writeValue;
}

function checkTimeFunc() {
    var hours = new Date().getHours;
    var greeting = "";

    if (hours < 10) {
        greeting = "Good morning!";
    } else if (hours < 20) {
        greeting = "Good day!";
    } else {
        greeting = "Good evening!";
    }

    return greeting;
}
