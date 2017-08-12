document.getElementById("test").innerHTML = 5 & 1;
document.getElementById("test2").innerHTML = 5 | 1;
document.getElementById("test3").innerHTML = 5 ^ 1;
document.getElementById("test4").innerHTML = ~5;
document.getElementById("test5").innerHTML = 5 << 1;
document.getElementById("test6").innerHTML = -5 >> 1;
document.getElementById("test7").innerHTML = 5 >>> 1;
document.getElementById("test8").innerHTML = dec2bin(-5);
document.getElementById("test9").innerHTML = bin2dec(101);

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}
