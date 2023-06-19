# GYM Application

This HTML file creates a form for adding and removing members to a gym.

## How it works

1. The user enters the member's information in the form fields.
2. The user clicks the button with the `onclick="initiate()"` attribute to add the member to the table.
3. The `initiate()` function is called when the button is clicked.
4. The `initiate()` function checks if the age and date entered are valid using the `ageValidation()` and `dateValidation()` functions.
5. If the age and date are valid, the `addTable()` function is called to add the member to the table.
6. The member's information is displayed in a new row in the table with the `id="table"`.
7. The user can delete a member by clicking the "Delete Member" button in that member's row.

## Functions

### initiate()

This function checks if the age and date entered are valid using the `ageValidation()` and `dateValidation()` functions. If they are valid, it calls the `addTable()` function to add the member to the table.
```JavaScript
function initiate() {
    if (ageValidation() || dateValidation()) {
        return;
    }
    addTable();
}
```

### addTable()

This function adds a new row to the table with the `id="table"` and displays the member's information in that row. It also creates a "Delete Member" button in that row which, when clicked, removes that row from the table.
```JavaScript
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
```

### ageValidation()

This function checks if the age entered is valid. It returns `true` if it is not valid and displays an alert message.
```JavaScript
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

```
### dateValidation()

This function checks if the date entered is valid. It returns `true` if it is not valid and displays an alert message.
```JavaScript
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
```

### updateCaption()

This function updates the caption of the table with the total number of rows.
```JavaScript
function updateCaption() {
    caption.innerHTML = "Total number of rows: " + total;
```
