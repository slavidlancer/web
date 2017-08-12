var x = 999999999999999; //15 digits
var y = 9999999999999999;
var z = 0.1 + 0.2;
var zCorrect = (0.1 * 10 + 0.2 * 10) / 10;
var v1 = 0xFF;
var v2 = 128;
var v3 = 2 / 0;
var v4 = -2 / 0;
var v5 = 9 / "text";
var v6 = 9 / "3";
var v7 = v5 + 1;
var v8 = v5 + "1";
var value01 = 0;
var value02 = 1;
var object01 = new Number(0);
var object02 = new Number(1);
var v9 = 9.656;
var p = "1.23";
var q = new Date();
var w = v9.MIN_VALUE;
var r = new Date("October 13, 2014 11:13:00");
var t = new Date(86400000);
var u = new Date(99, 5, 24, 11, 33, 30, 0);
var o = new Date("2015-03-25"); //"03/25/2015" //"25 Mar 2015" //"January 25 2015" //"Wed Mar 25 2015 09:56:24 GMT+0100 (W. Europe Standard Time)"
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var msec = Date.parse("March 21, 2012");
var today = new Date();
var someday = new Date();
someday.setFullYear(2000, 0, 14);
var text;

document.getElementById("test17").innerHTML = x + " | " + y + "<br />" + z + "<br />" + zCorrect;
document.getElementById("test18").innerHTML = v1 + "<br />" + v2.toString(16) + " | " + v2.toString(8) + " | " + v2.toString(2);
document.getElementById("test19").innerHTML = v3 + " | " + v4 + " | " + typeof Infinity + " | " + v5 + " | " + isNaN(v5) + " | " + v6;
document.getElementById("test20").innerHTML = v7 + " | " + v8 + " | " + typeof NaN;
document.getElementById("test21").innerHTML = (value01 == object01) + " | " + (value01 === object01) + " | " + (object01 == object02) +
        " | " + (object01 === object02);
document.getElementById("test22").innerHTML = typeof value01 + " | " + typeof object01;
document.getElementById("test23").innerHTML = result4;
document.getElementById("test24").innerHTML = result5;
document.getElementById("test25").innerHTML = result6;
document.getElementById("test26").innerHTML = result7;
document.getElementById("test27").innerHTML = result8;
document.getElementById("test28").innerHTML = result9;
document.getElementById("test29").innerHTML = result10;
document.getElementById("test30").innerHTML = text3 + " (" + charVar + ", " + charCode + ")";
document.getElementById("test31").innerHTML = arr01[0] + " - " + arr01[1];
document.getElementById("test32").innerHTML = v9.toExponential(2) + " | " + v9.toExponential(6) + " | " + v9.toFixed(2) + " | " + v9.toFixed(6);
document.getElementById("test33").innerHTML = v9.toPrecision(2) + " | " + v9.toPrecision(3) + " | " + p.valueOf() + " | " + Number(q);
document.getElementById("test34").innerHTML = parseInt("10 years") + " | " + parseInt("years 10") + " | " + parseInt(10.393);
document.getElementById("test35").innerHTML = parseFloat("10 years") + " | " + parseFloat("years 10") + " | " + parseFloat(10.393);
document.getElementById("test36").innerHTML = Number.MAX_VALUE + " | " + w + " | " + Math.PI + " | " + Math.round(2.23456);
document.getElementById("test37").innerHTML = Math.pow(8, 2) + " | " + Math.sqrt(81) + " | " + Math.abs(-1.23) + " | " + Math.ceil(2.23456);
document.getElementById("test38").innerHTML = Math.floor(8.2345) + " | " + Math.min(1, 2, 3, -1, -4, -5) + " | " + Math.max(-1.23, 0, 2, 3, 1, 15);
document.getElementById("test39").innerHTML = (Math.random() * 10) + 1 + " | " + Math.min(1, 2, 3, -1, -4, -5) + " | " + Math.max(-1.23, 0, 2, 3, 1, 15);
document.getElementById("test40").innerHTML = Date() + " | " + o + " | " + r + " | " + t + " | " + u + " | " + r.toUTCString() + " | " + t.toDateString();
document.getElementById("test41").innerHTML = o.getTime() + " | " + days[o.getDay()] + " | " + r.getFullYear() + " | " + t.setFullYear(2000, 0, 14);

if (someday > today) {
        text = "before 2000";
} else {
        text = "after 2000";
}

document.getElementById("test42").innerHTML = msec + " | " + new Date(msec) + " | " + text + " | " + t.setFullYear(2000, 0, 14);


function getRandomInt(min, max) {
        var result = Math.floor(Math.random() * (max - min + 1)) + min;

        return result;
}
