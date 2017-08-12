document.getElementById("test2").innerHTML = findMax(1, 123, 500, 115, 44, 88);
document.getElementById("test3").innerHTML = sumAll(1, 123, 500, 115, 44, 88);

function calculate(x, y) {
    if (x == undefined) {
        x = 1;
    }

    if (y == undefined) {
        y = 1;
    }

    document.getElementById("test").innerHTML = x + y;
}

function findMax() {
    var i = 0;
    var max = -Infinity;

    for (; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

function sumAll() {
    var i = 0;
    var sum = 0;

    for (; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}
