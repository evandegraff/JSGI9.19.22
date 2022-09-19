//EXTRA WAYS OF DOING IT HC

// Add Function

const add = function (num1, num2) {
  return num1 + num2;
};

// Subtract Function

const subtract = function (num1, num2) {
  return num1 - num2;
};

// Multiply Function

const multiply = function (num1, num2) {
  return num1 * num2;
};

// Divide Function

const divide = function (num1, num2) {
  return num1 / num2;
};

const number1 = Number(prompt("What is your first number?")); // Changes from string to number

const number2 = Number(prompt("What is your second number?"));

const operator = prompt("What is your operator?");

const checkOperator = function (operator, number1, number2) {
  if (operator == "+") {
    // Checks if operator is equal to +
    return add(number1, number2); // Runs the add function (line 3)
  } else if (operator == "-") {
    subtract(number1, number2);
  } else if (operator == "*") {
    multiply(number1, number2);
  } else if (operator == "/") {
    divide(number1, number2);
  } else {
    alert("You didnt put a valid operator"); // Someone didnt put a valid operator
  }
};

console.log(
  `${number1} ${operator} ${number2} = ${checkOperator(
    operator,
    number1,
    number2
  )}`
);
