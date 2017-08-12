document.getElementById("test").innerHTML = elements;


function showDate() {
    document.getElementById("test").innerHTML = Date();
}

function format() {
    document.getElementById("test2").style.fontSize = "25px";
    document.getElementById("test2").style.color = "red";
}

function changeImage(flag) {
    var imageUrl;

    if (flag == 0) {
        imageUrl = "";
    } else {
        imageUrl = "planets.gif";
    }

    document.getElementById("image").src = imageUrl;
}
