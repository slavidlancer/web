function validateForm() {
    var nameField = document.forms["val_form"]["name"].value;

    if (nameField == "") {
        window.alert("the name must be filled out");

        return false;
    }
}

function validateNumber() {
    var numberValue = document.getElementById("numberin").value;
    var text = "";

    if (isNaN(numberValue) || numberValue < 1 || numberValue > 10) {
        text = "not valid input";
    } else {
        text = "valid input";
    }

    document.getElementById("output").innerHTML = "[" + text + "]";
}

function validateNumber2() {
    var number = document.getElementById("numberin2");
    var text = "";

    if (number.checkValidity() == false) {
        text = number.validationMessage;
    } else {
        text = "valid input";
    }

    if (number.validity.rangeOverflow) {
        text += " | value too large";
    }

    if (number.validity.rangeUnderflow) {
        text += " | value too small";
    }

    document.getElementById("output2").innerHTML = "[" + text + "]";
}
