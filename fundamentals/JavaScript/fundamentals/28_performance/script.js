var elements = ["element 01", "element 02", "element 03", "element 4"];
var obj = document.getElementById("test");
obj.innerHTML = elements;
var obj2 = document.getElementById("test2");

elementsLength = elements.length;

for (var i = 0; i < elementsLength; i++) {
    obj2.innerHTML += elements[i] + " ";
}
