var a = 5;
c = 1;
var counter = 0;

var add4 = (function() {
    var counter4 = 0;

    return function() {
        return counter4 += 1;
    }
})();

add();
add();
add();

add2();
add2();

document.getElementById("test").innerHTML = counter;
document.getElementById("test2").innerHTML = add2() + "/" + add2() + "/" + add2();
document.getElementById("test3").innerHTML = add3() + "/" + add3() + "/" + add3();
document.getElementById("test4").innerHTML = add4() + "/" + add4() + "/" + add4();

function testScopes() {
    console.log(a);
    console.log(c);

    b = 6;
    console.log(b);

    a = 3;
    console.log(a);

    var a = 4;
    console.log(a);

    c = 9;
    console.log(c);
}

function testChangedScopes() {
    console.log(a);
    console.log(c);
}

function add() {
    counter += 1;
}

function add2() {
    var counter2 = 0;
    counter2 += 1;

    return counter2;
}

function add3() {
    var counter3 = 0;

    function plus() {
        counter3 += 1;
    }

    plus();
    plus();
    plus();

    return counter3;
}
