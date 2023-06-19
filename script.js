var total = 0;
var caption = document.getElementById("table-caption");
updateCaption();

function initiate() {
    if (ageValidation() || dateValidation()) {
        return;
    }
    addTable();
}

function addTable() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var feet = document.getElementById('feet').value;
    var inches = document.getElementById('inches').value;
    var date = document.getElementById('date').value;

    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cellDelete = row.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = feet + "'" + inches + '"';
    cell4.innerHTML = date;

    var button = document.createElement("button");
    button.innerText = "Delete Member";
    button.addEventListener("click", function () {
        row.remove();
        total--;
        updateCaption();
    });
    cellDelete.appendChild(button);

    document.getElementById("form").reset();
    total++;
    updateCaption();
}

function ageValidation() {
    var age = parseInt(document.getElementById("age").value);
    if (isNaN(age) || age < 18) {
        alert(age + " is too young. The minimum age requirement is 18.");
        return true;
    } else if (isNaN(age) || age > 65) {
        alert(age + " is too old. The maximum age requirement is 65.");
        return true;
    }
    return false;
}

function dateValidation() {
    var date = document.getElementById("date").value;
    var split = date.split("-");
    var year = parseInt(split[0], 10);
    if (year < 2022) {
        alert(date + " is not a valid date. Please select a date after 2022.");
        return true;
    }
    return false;
}

function updateCaption() {
    caption.innerHTML = "Total number of rows: " + total;
}