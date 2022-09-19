
//EXTRA WAYS OF DOING IT EL 
let x = Number(prompt("Pick a number!", "0"));
console.log(x);
while (isNaN(x)) {
  x = prompt("Please pick a number!", "0");
}
let operator = prompt(" Pick an operator: +, -, *, /");
let y = Number(prompt("Pick a second number!", "0"));
console.log(y);
while (isNaN(y)) {
  y = prompt("Please pick another number!", "0");
}
switch (operator) {
  case "+":
    result = x + y;
    console.log(`${x} + ${y} = ${result}`);
    alert(`${x} + ${y} = ${result}`);
    break;
  case "-":
    result = x - y;
    console.log(`${x} - ${y} = ${result}`);
    alert(`${x} - ${y} = ${result}`);
    break;
  case "*":
    result = x * y;
    console.log(`${x} * ${y} = ${result}`);
    alert(`${x} * ${y} = ${result}`);
    break;
  case "/":
    result = x / y;
    console.log(`${x} / ${y} = ${result}`);
    alert(`${x} / ${y} = ${result}`);
    break;
  default:
    console.log("The user isn't following directions");
    alert("Please follow the directions!");
}