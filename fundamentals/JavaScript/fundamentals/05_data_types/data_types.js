var length = 15;
var lastName = "String Name";
var xObj = {firstName: "xFirst", lastName: "xSecond"};
var x; //undefined
var x = 1; //number
var x = "value"; //string
var y = 12.34;
var p = 123e5; //12300000
var q = 123e-5; //0.00123
var valueArr = ["value1", "value2", "value3"];
var person;
var person2 = {name: "name", score: 0};
var person2 = undefined;
var person3 = {name: "name", score: 0};
var person3 = null;


document.getElementById("test3").innerHTML = "str: " + typeof "str" + "<br />3.14: " + typeof 3.14 + "<br />false: " +
        typeof false + "<br />[1, 2, 3, 4]: " + typeof [1, 2, 3, 4] + "<br />{name: \"type\", \"type\": \"name\"}: " +
        typeof {name: "type", type: "name"};
document.getElementById("test4").innerHTML = "var person;<br />type: " + typeof person + "<br />value: " + person;
document.getElementById("test5").innerHTML = "var person2;<br />type: " + typeof person2 + "<br />value: " + person2;
document.getElementById("test6").innerHTML = "var person3;<br />type: " + typeof person3 + "<br />value: " + person3;
document.getElementById("test7").innerHTML = "typeof undefined: " + typeof undefined + "<br />typeof null: " +
        typeof null + "<br />(null === undefined): " + (null === undefined) + "<br />(null == undefined): " + (null == undefined);


function showFirstElement() {
    document.getElementById("test").innerHTML = valueArr[0];
}

function showFirstName() {
    document.getElementById("test2").innerHTML = xObj.firstName; //xObj["firstName"]
}
