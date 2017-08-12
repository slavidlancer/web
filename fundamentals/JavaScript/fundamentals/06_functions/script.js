var result = calculate(4, 3);
var result2 = toCelcius(120);

document.getElementById("test").innerHTML = result;
document.getElementById("test2").innerHTML = result2;
document.getElementById("test3").innerHTML = toCelcius;


function calculate(parameter1, parameter2) {
    var result = parameter1 * parameter2;

    return result;
}

function toCelcius(fahrenheit) {
    var result = (5 / 9) * (fahrenheit - 32);

    return result;
}

function showAlert() {
    window.alert("result: " + calculate(19, 87));
}
