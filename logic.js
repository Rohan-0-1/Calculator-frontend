let display = document.getElementById("dis");

// Append the input to the display
function appendtodisplay(input) {
    if (input === "=") {
        calculate();
    } else {
        display.value += input;
    }
}

// Clear the display
function cleardisplay() {
    display.value = "";
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

// Delete the last element from the display
function deleteElement() {
    display.value = display.value.slice(0, -1);
}
