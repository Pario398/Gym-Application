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

### addTable()

This function adds a new row to the table with the `id="table"` and displays the member's information in that row. It also creates a "Delete Member" button in that row which, when clicked, removes that row from the table.

### ageValidation()

This function checks if the age entered is valid. It returns `true` if it is not valid and displays an alert message.

### dateValidation()

This function checks if the date entered is valid. It returns `true` if it is not valid and displays an alert message.

### updateCaption()

This function updates the caption of the table with the total number of rows.
