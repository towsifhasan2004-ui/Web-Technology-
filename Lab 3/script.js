
function calculate(operator) {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    const output = document.getElementById("calculatorOutput");

    // Check whether both fields are filled
    if (num1 === "" || num2 === "") {
        output.textContent = "Please enter both numbers.";
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            output.textContent = "Cannot divide by zero.";
            return;
        }

        result = num1 / num2;
    } else {
        output.textContent = "Invalid operator.";
        return;
    }

    output.innerHTML =
        "<h2>Calculator Result</h2>" +
        "<p>Result: " + result + "</p>";
}
