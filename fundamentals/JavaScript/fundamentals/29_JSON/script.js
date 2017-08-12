var text = '{' +
    '"array": [' +
        '{ "type01": "01", "type02": "021", "type03": 31 },' +
        '{ "type01": "02", "type02": "022", "type03": 32 },' +
        '{ "type01": "03", "type02": "023", "type03": 33 }' +
    ']' +
'}';
var obj = JSON.parse(text);

document.getElementById("test").innerHTML = obj.array[1].type01 + " " + obj.array[1].type02 + " " + obj.array[1].type03;
