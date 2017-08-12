var elements = ["element 01", "element 02", "element 03", "element 4"];
var result = document.getElementById("test3");
var x = 666;
var z = "666";
var y = + z;
var z1 = "num";
var y1 = + z1;
var testVar = { prop01: "val" };
var testVar2 = Infinity;
var testVar3 = NaN;
var testVar4 = -Infinity;
var testVar5 = [];
var testVar6 = [20];
var testVar7 = ["twenty"];
var testVar8 = ["ten", "twenty"];
var testVar9 = function() {};
var testVar10 = {};
var testVar11 = null;
var testVar12 = undefined;

document.getElementById("test").innerHTML = typeof "string" + "<br / />" +
        typeof 3.14 + "<br / />" +
        typeof NaN + "<br / />" +
        typeof false + "<br / />" +
        typeof [1, 2, 3, 4] + "<br / />" +
        typeof { name: 'name', value: 0 } + "<br / />" +
        typeof new Date() + "<br / />" +
        typeof function () {} + "<br / />" +
        typeof car + "<br / />" +
        typeof null;
document.getElementById("test2").innerHTML = "string".constructor + "<br / />" +
    (3.14).constructor + "<br / />" +
    false.constructor + "<br / />" +
    [1, 2, 3, 4].constructor + "<br / />" +
    { name: 'name', value: 0 }.constructor + "<br / />" +
    new Date().constructor + "<br / />" +
    function () {}.constructor;
document.getElementById("test4").innerHTML = isArray2(elements);
document.getElementById("test5").innerHTML = String(x) + " / " + String(12.34) + " / " + String(100 + 23) + " / " + x.toString() +
        " / " + (999).toString() + " / " +  (1.23).toFixed() + " / " + (5555).toPrecision(2);
document.getElementById("test6").innerHTML = Number("3.14") + " / " + Number(" ") + " / " + Number("") + " / " + Number("99 88");
document.getElementById("test7").innerHTML = typeof z + " / " + typeof y + " / " + Number(false) + " / " + Number(true);
document.getElementById("test8").innerHTML = typeof z1 + " = " + z1 + " / " + typeof y1 + " = " + y1;
document.getElementById("test9").innerHTML = parseFloat(666.4444) + " / " + parseInt(2.345);
document.getElementById("test10").innerHTML = String(Date());
document.getElementById("test11").innerHTML = (5 + null) + "<br />" +
        ("5" + null) + "<br />" +
        ("5" + 2) + "<br />" +
        ("5" - 2) + "<br />" +
        ("5" * "2") + "<br />" +
        ("5" / "2") + "<br />";
document.getElementById("test12").innerHTML = testVar;
document.getElementById("test13").innerHTML = Number(testVar2) + " / " + String(testVar2) + " / " + Boolean(testVar2);
document.getElementById("test14").innerHTML = Number(testVar3) + " / " + String(testVar3) + " / " + Boolean(testVar3);
document.getElementById("test15").innerHTML = Number(testVar4) + " / " + String(testVar4) + " / " + Boolean(testVar4);
document.getElementById("test16").innerHTML = Number(testVar5) + " / " + String(testVar5) + " / " + Boolean(testVar5);
document.getElementById("test17").innerHTML = Number(testVar6) + " / " + String(testVar6) + " / " + Boolean(testVar6);
document.getElementById("test18").innerHTML = Number(testVar7) + " / " + String(testVar7) + " / " + Boolean(testVar7);
document.getElementById("test19").innerHTML = Number(testVar8) + " / " + String(testVar8) + " / " + Boolean(testVar8);
document.getElementById("test20").innerHTML = Number(testVar9) + " / " + String(testVar9) + " / " + Boolean(testVar9);
document.getElementById("test21").innerHTML = Number(testVar10) + " / " + String(testVar10) + " / " + Boolean(testVar10);
document.getElementById("test22").innerHTML = Number(testVar11) + " / " + String(testVar11) + " / " + Boolean(testVar11);
document.getElementById("test23").innerHTML = Number(testVar12) + " / " + String(testVar12) + " / " + Boolean(testVar12);


function isArray(arr) {
    result.innerHTML = arr.constructor.toString().indexOf("Array") > -1;
}

function isArray2(arr) {
    return arr.constructor === Array;
}
