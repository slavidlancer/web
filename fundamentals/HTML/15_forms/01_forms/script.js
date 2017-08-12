function submitFn() {
    var firstname = document.getElementById("firstnamein").value;
    var lastname = document.getElementById("lastnamein").value;
    var on_off = document.getElementsByName("on_off");
    var on_off_value = "";

    for (var i = 0, length = on_off.length; i < length; i++) {
        if (on_off[i].checked) {
            on_off_value = on_off[i].value;

            break;
        }
    }

    // console.log(on_off.value);

    if (on_off_value == "on") {
        console.log("on");
        window.alert("hello " + firstname + " " + lastname);
    } else if (on_off_value == "off") {
        console.log("off");
        window.alert("hello ....");
    }
}
