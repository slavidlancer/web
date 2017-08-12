var product = calculateProduct(2, 3);

var sum = function(a, b) {
    return a + b;
};

var z = sum(4, 7);

var testSumFunction = new Function("a", "b", "return a + b;"); // function() {}
var z2 = testSumFunction(4, 7);

var getArgumentsLength = function() {
    return arguments.length;
};

document.getElementById("test").innerHTML = product;
document.getElementById("test2").innerHTML = sum(9, 8) * 2 + " | " + z + " | " + z2;
document.getElementById("test3").innerHTML = getArgumentsLength(1, 2, 3, 4, 5, 6);
document.getElementById("test4").innerHTML = getArgumentsLength.toString();

function calculateProduct(a, b) {
    var result = a * b;

    console.log(result);

    return result;
}

(function() {
    var text = "text";

    console.log(text);
})();
