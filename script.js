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
        document.getElementById("result").value = eval(input);
      } catch {
        document.getElementById("result").value = "Error";
      }
    }

    // Memory Add function (M+)
    function memoryAdd() {
      const input = document.getElementById("result").value;
      if (!isNaN(input) && input !== "") {
        memory += parseFloat(input);
        alert(`Memory: ${memory}`);
      }
    }

    // Memory Subtract function (M-)
    function memorySubtract() {
      const input = document.getElementById("result").value;
      if (!isNaN(input) && input !== "") {
        memory -= parseFloat(input);
        alert(`Memory: ${memory}`);
      }
    }

    // Memory Clear function (MC)
    function memoryClear() {
      memory = 0;
      alert("Memory cleared!");
    }