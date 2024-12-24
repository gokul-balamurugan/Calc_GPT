
        let display = document.getElementById('display');
        let history = document.getElementById('history');

        function appendValue(value) {
            if (display.value === "0") {
                display.value = value;
            } else {
                display.value += value;
            }
        }

        function calculate() {
            try {
                let result = eval(display.value);
                addToHistory(display.value + " = " + result);
                display.value = result;
            } catch (e) {
                alert("Invalid Expression");
                clearDisplay();
            }
        }

        function clearDisplay() {
            display.value = "0";
        }

        function deleteLast() {
            if (display.value.length > 1) {
                display.value = display.value.slice(0, -1);
            } else {
                display.value = "0";
            }
        }

        function addToHistory(entry) {
            let newEntry = document.createElement('div');
            newEntry.textContent = entry;
            history.appendChild(newEntry);
            history.scrollTop = history.scrollHeight; // Auto-scroll to the bottom
        }
    