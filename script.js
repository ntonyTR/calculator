const operaciones = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const num_btns = document.querySelectorAll(".numeric_buttons");
const display = document.getElementById("calculator_display");
let firstValue = 0;
let secondValue = 0;

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

function recibirOperador() {
  let op;
  let operadores = Object.keys(operaciones);
  while (!operadores.includes(op)) {
    op = "+";
  }
  console.log(`operador: ${op}`);
  return op;
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
  console.log(`resultado: ${operaciones[op](a, b)}`);
  return operaciones[op](a, b);
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

getFirstValue()