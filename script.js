const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "x": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const num_btns = document.querySelectorAll(".numeric_buttons");
const display = document.getElementById("calculator_display");
const op_btns = document.querySelectorAll(".operator_buttons");
let firstValue = 0;
let secondValue = 0;
let op = "";

function getFirstValue() {
  num_btns.forEach((button) => {
    button.addEventListener("click", () => {
      firstValue = updateFirstValue(firstValue, button);
      updateDisplay(firstValue, display);
      console.log(firstValue); // test
    });
  });
}

function updateFirstValue(value, element) {
  value += element.textContent;
  value = +value;
  return value;
}

function updateDisplay(value, element) {
  element.textContent = value;
}

function getOperator() {
  op_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      op = btn.textContent;
      console.log(op); // test
    });
  });
}

function recibirSegundoValor() {
  let b;
  while (isNaN(b)) {
    b = 2;
  }
  console.log(`Segundo valor: ${b}`);
  return b;
}

function ejecutarOperacion(op, a, b) {
  console.log(`operacion: ${a} ${op} ${b}`);
  console.log(`resultado: ${operations[op](a, b)}`);
  return operations[op](a, b);
}

function reiniciar() {
  valor1 = recibirPrimerValor();
  operador = recibirOperador();
  valor2 = recibirSegundoValor();
  resultado = ejecutarOperacion(operador, valor1, valor2);
  return;
}

function continuar(resultado) {
  let continuar = "n";
  if (continuar == "y") {
    console.log("si continuar");
    valor1 = resultado;
    operador = recibirOperador();
    valor2 = recibirSegundoValor();
    resultado = ejecutarOperacion(operador, valor1, valor2);
    continuar();
  } else if (continuar == "n") {
    console.log("no continuar");
  }
}

getFirstValue();
getOperator();
let b = recibirSegundoValor();
