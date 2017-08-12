var day;
var currentDay = new Date().getDay();

switch (currentDay) {
    case 0:
        day = "Sunday";
        break;

    case 1:
        day = "Monday";
        break;

    case 2:
        day = "Tuesday";
        break;

    case 3:
        day = "Wednesday";
        break;

    case 4:
        day = "Thursday";
        break;

    case 5:
        day = "Friday";
        break;

    case 6:
        day = "Saturday";
        break;

    default:
        day = "unknown";
        break;
}

switch (currentDay) {
    case 0:
        typeOfDay = "weekend";
        break;

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        typeOfDay = "week day";
        break;

    case 6:
        typeOfDay = "weekend";
        break;

    default:
        typeOfDay = "unknown";
        break;
}

document.getElementById("test").innerHTML = day + "/" + typeOfDay;
