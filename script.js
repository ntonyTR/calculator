//TODO: aceptar un numero negativo como primer valor (empezar con '-')
//TODO: aceptar mas de dos operandos y mas de un operador sin necesidad de clickear '='

const OPERATIONS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "x": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const VALUES = {
  a: 0,
  b: 0,
};

const FIRST_OPERAND = "a";
const SECOND_OPERAND = "b";

let op = "";
let result = 0;
let updateFirst = true;

const NUM_BTNS = document.querySelectorAll(".numeric_buttons");
const DISPLAY = document.getElementById("calculator_display");
const OP_BTNS = document.querySelectorAll(".operator_buttons");
const EQUAL_BTN = document.getElementById("equal_button");
const RESET_BTN = document.getElementById("reset_button");
const DELETE_BTN = document.getElementById("delete_button");

RESET_BTN.addEventListener("click", reset);
DELETE_BTN.addEventListener("click", deleteDigit);

const DECIMAL_BTN = document.getElementById("decimal_button");

DECIMAL_BTN.addEventListener("click", addDecimal)

let decimalAdded = false;

function addDecimal() {
  let current = updateFirst ? FIRST_OPERAND : SECOND_OPERAND;
  if (!decimalAdded) {
    VALUES[current] += "."
    decimalAdded = true;
  }
  updateDisplay(VALUES[current])
}

function deleteDigit() {
  let current = updateFirst ? FIRST_OPERAND : SECOND_OPERAND;
  VALUES[current] = +VALUES[current].toString().slice(0, -1);
  updateDisplay(VALUES[current]);
};

function reset() {
  for (let value in VALUES) {
    VALUES[value] = 0;
  }
  result = 0;
  op = "";
  updateFirst = true;
  updateDisplay("");
}

function getValue() {
  NUM_BTNS.forEach((btn) => {
    btn.addEventListener("click", () => {
      let currentOperand = updateFirst ? FIRST_OPERAND : SECOND_OPERAND;
      VALUES[currentOperand] = updateValue(VALUES[currentOperand], btn);
      updateDisplay(VALUES[currentOperand]);
    });
  });
}

function updateValue(value, element) {
  value += element.textContent;
  value = +value;
  return value;
}

function updateDisplay(value) {
  DISPLAY.textContent = value;
}

function getOperator() {
  OP_BTNS.forEach((btn) => {
    btn.addEventListener("click", () => {
      op = btn.textContent;
      updateDisplay(op);
      updateFirst = false;
      decimalAdded = false;
    });
  });
}

function makeOperation() {
  EQUAL_BTN.addEventListener("click", () => {
    let a = VALUES[FIRST_OPERAND];
    let b = VALUES[SECOND_OPERAND];
    result = OPERATIONS[op](a, b);
    updateDisplay(result);
    continueCalc();
  });
}

function continueCalc() {
  VALUES[FIRST_OPERAND] = result;
  VALUES[SECOND_OPERAND] = 0;
  result = 0;
  updateFirst = true;
  decimalAdded = false;
}

getValue();
getOperator();
makeOperation();

// function continuar(resultado) {
//   let continuar = "n";
//   if (continuar == "y") {
//     console.log("si continuar");
//     valor1 = resultado;
//     operador = recibirOperador();
//     valor2 = recibirSegundoValor();
//     resultado = ejecutarOperacion(operador, valor1, valor2);
//     continuar();
//   } else if (continuar == "n") {
//     console.log("no continuar");
//   }
// }
