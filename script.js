let memory = 0;

// Clear screen function
function clearScreen() {
    document.getElementById("result").value = "";
}

// Display function
function display(value) {
    document.getElementById("result").value += value;
}

// Calculate function
function calculate() {
    const input = document.getElementById("result").value;
    try {
        // Using eval is generally discouraged for security reasons
        // In a real application, you'd parse and evaluate the expression safely
        document.getElementById("result").value = eval(input);
    } catch {
        document.getElementById("result").value = "Error";
    }
}

// Memory Add function (M+)
function memoryAdd() {
    const input = document.getElementById("result").value;
    const currentValue = parseFloat(input); // Use parseFloat to handle decimals
    if (!isNaN(currentValue)) { // Check if the current input is a valid number
        memory += currentValue;
        // You might want to display memory value somewhere or keep it hidden
        // alert(`Memory: ${memory}`); // Optional: show memory value
        document.getElementById("result").value = memory; // Optional: display memory value after adding
    } else {
         alert("Invalid input for Memory Add");
    }
}

// Memory Subtract function (M-)
function memorySubtract() {
    const input = document.getElementById("result").value;
     const currentValue = parseFloat(input);
    if (!isNaN(currentValue)) {
        memory -= currentValue;
         // alert(`Memory: ${memory}`); // Optional: show memory value
         document.getElementById("result").value = memory; // Optional: display memory value after subtracting
    } else {
         alert("Invalid input for Memory Subtract");
    }
}

// Memory Clear function (MC)
function memoryClear() {
    memory = 0;
    // alert("Memory cleared!"); // Optional: show confirmation
    document.getElementById("result").value = ""; // Clear display when memory is cleared
}

// Optional: Add a Memory Recall (MR) button in HTML and JS
// Function would be:
/*
function memoryRecall() {
    document.getElementById("result").value = memory;
}
*/
// Add a button in HTML: <button id="memory-recall" class="memory-btn" onclick="memoryRecall()">MR</button>
