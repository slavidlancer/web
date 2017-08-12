function submitFn() {
    var firstname = document.getElementById("firstnamein").value;
    var lastname = document.getElementById("lastnamein").value;
    var password = document.getElementById("passwordin").value;
    var countryOptions = document.getElementById("countryin");
    var country = countryOptions.options[countryOptions.selectedIndex].text;
    var textarea = document.getElementById("textareain").value;
    var colorOptionWhite = document.getElementById("flag1in").checked;
    var colorOptionBlue = document.getElementById("flag2in").checked;
    var colorOptionRed = document.getElementById("flag3in").checked;

    if (firstname == "") {
        firstname = "unknown";
    }

    if (lastname == "") {
        lastname = "'s";
    }

    window.alert("hello " + firstname + " " + lastname + " from " + country);
    window.alert(textarea + ":\n" + password + "\n" + colorOptionWhite + "|" + colorOptionBlue + "|" + colorOptionRed);
}
