var elements = ["zyxw", "abcd", "zayxw", "0zyxw"];
var points = [40, 100, 1, 5, 25, 10];
var objArray = [
    {type: "zyxw 01", year: 2000},
    {type: "zayxw 04", year: 2004},
    {type: "0zyxw 03", year: 2001},
    {type: "abcd 02", year: 2003},
    {type: "ghjk 05", year: 2002}
];

document.getElementById("test").innerHTML = elements + " | " + elements.sort();
document.getElementById("test2").innerHTML = elements.reverse();
document.getElementById("test3").innerHTML = points.sort(function(a, b) { return a - b;}) + " | " + points[0];
document.getElementById("test4").innerHTML = points.sort(function(a, b) { return b - a;}) + " | " + points[0];
document.getElementById("test5").innerHTML = points.sort(function(a, b) { return 0.5 - Math.random();});


function sortArray() {
    objArray.sort(function(a, b) { return a.year - b.year;});

    displayArray();
}

function sortArrayByString() {
    objArray.sort(function(a, b) {
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();

        if (x < y) {
            return -1;
        }

        if (x > y) {
            return 1;
        }

        return 0;
    });

    displayArray();
}

function displayArray() {
    var result = "";

    for (var i = 0; i < objArray.length; i++) {
        result += objArray[i].type + ": " + objArray[i].year + "<br />";
    }

    document.getElementById("test6").innerHTML = result;
}
